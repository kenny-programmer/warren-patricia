import { useState } from "react";
import { submitRSVP, checkDuplicateEmail, checkDuplicatePhone } from "@/lib/supabase";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attending: "",
    guest_count: 1,
    mealpreference: "",
    specialrequirements: "",
    message: "",
  });

  // State for additional guests
  const [guests, setGuests] = useState([]);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGuestCountChange = (value) => {
    const count = parseInt(value);
    setFormData({ ...formData, guest_count: count });

    // Create guest objects for additional guests (excluding the primary guest)
    const additionalGuestCount = count - 1;
    const newGuests = Array.from({ length: additionalGuestCount }, (_, index) => ({
      id: index + 1,
      name: guests[index]?.name || "",
      email: guests[index]?.email || "",
      phone: guests[index]?.phone || "",
      mealpreference: guests[index]?.mealpreference || "",
    }));
    setGuests(newGuests);
  };

  const handleGuestChange = (guestIndex, field, value) => {
    const updatedGuests = [...guests];
    updatedGuests[guestIndex] = {
      ...updatedGuests[guestIndex],
      [field]: value
    };
    setGuests(updatedGuests);
  };

  const validateDuplicates = async () => {
    // Check primary guest email
    if (await checkDuplicateEmail(formData.email)) {
      throw new Error("Your email has already been used for an RSVP.");
    }

    // Check primary guest phone
    if (formData.phone && await checkDuplicatePhone(formData.phone)) {
      throw new Error("Your phone number has already been used for an RSVP.");
    }

    // Check guest emails and phones
    for (let i = 0; i < guests.length; i++) {
      const guest = guests[i];
      if (guest.email && await checkDuplicateEmail(guest.email)) {
        throw new Error(`Guest ${i + 2}'s email has already been used for an RSVP.`);
      }
      if (guest.phone && await checkDuplicatePhone(guest.phone)) {
        throw new Error(`Guest ${i + 2}'s phone number has already been used for an RSVP.`);
      }
    }

    // Check for duplicates within the current form
    const allEmails = [formData.email, ...guests.filter(g => g.email).map(g => g.email)];
    const allPhones = [formData.phone, ...guests.filter(g => g.phone).map(g => g.phone)].filter(Boolean);

    const emailDuplicates = allEmails.filter((email, index) => allEmails.indexOf(email) !== index);
    const phoneDuplicates = allPhones.filter((phone, index) => allPhones.indexOf(phone) !== index);

    if (emailDuplicates.length > 0) {
      throw new Error("You have duplicate emails in your guest list.");
    }
    if (phoneDuplicates.length > 0) {
      throw new Error("You have duplicate phone numbers in your guest list.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // Validate for duplicates
      await validateDuplicates();

      // Submit primary guest
      await submitRSVP({
        ...formData,
        guest_count: Number(formData.guest_count),
        is_primary_guest: true,
        created_at: new Date().toISOString(),
      });

      // Submit additional guests if any
      for (const guest of guests) {
        if (guest.name.trim()) { // Only submit if guest has a name
          await submitRSVP({
            name: guest.name,
            email: guest.email || null,
            phone: guest.phone || null,
            attending: "yes", // Additional guests are attending since primary guest is attending
            guest_count: 1,
            mealpreference: guest.mealpreference || "",
            specialrequirements: "",
            message: `Guest of ${formData.name}`,
            is_primary_guest: false,
            created_at: new Date().toISOString(),
          });
        }
      }

      setSuccess("RSVP submitted successfully for all guests!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        attending: "",
        guest_count: 1,
        mealpreference: "",
        specialrequirements: "",
        message: "",
      });
      setGuests([]);

    } catch (err) {
      setError(err.message || "There was an error submitting your RSVP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-2">RSVP Form</h2>
        <p className="text-muted-foreground">Please let us know if you'll be joining our celebration</p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
          {success}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Your Name *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="email">Your Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="phone">Your Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1"
          />
        </div>

        <div>
          <Label>Will you be attending? *</Label>
          <div className="flex gap-6 mt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="attending"
                value="yes"
                checked={formData.attending === "yes"}
                onChange={handleChange}
                required
                className="text-rose-500"
              />
              <span>Yes, I'll be there! 🎉</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="attending"
                value="no"
                checked={formData.attending === "no"}
                onChange={handleChange}
                required
                className="text-rose-500"
              />
              <span>Sorry, can't make it 😢</span>
            </label>
          </div>
        </div>

        {formData.attending === "yes" && (
          <>
            <div>
              <Label>Number of Guests (including yourself)</Label>
              <Select onValueChange={handleGuestCountChange} value={formData.guest_count.toString()}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select number of guests" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Your Meal Preference</Label>
              <Input
                name="mealpreference"
                value={formData.mealpreference}
                onChange={handleChange}
                placeholder="e.g., Vegetarian, No pork, etc."
                className="mt-1"
              />
            </div>

            <div>
              <Label>Message to the Couple</Label>
              <Textarea
                name="specialrequirements"
                value={formData.specialrequirements}
                onChange={handleChange}
                placeholder="Your message to us will be cherished!"
                className="mt-1"
              />
            </div>

            {/* Additional Guest Details */}
            {guests.map((guest, index) => (
              <div key={guest.id} className="border-t pt-6 mt-6">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Guest #{index + 2} Details
                </h3>

                <div className="space-y-4">
                  <div>
                    <Label>Name *</Label>
                    <Input
                      value={guest.name}
                      onChange={(e) => handleGuestChange(index, 'name', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      value={guest.email}
                      onChange={(e) => handleGuestChange(index, 'email', e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label>Phone Number</Label>
                    <Input
                      value={guest.phone}
                      onChange={(e) => handleGuestChange(index, 'phone', e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label>Meal Preference</Label>
                    <Input
                      value={guest.mealpreference}
                      onChange={(e) => handleGuestChange(index, 'mealpreference', e.target.value)}
                      placeholder="e.g., Vegetarian, No pork, etc."
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            ))}
          </>
        )}

        <Button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-rose-500 hover:bg-rose-600 text-white font-medium"
        >
          {loading ? "Submitting..." : "Submit RSVP"}
        </Button>
      </div>
    </form>
  );
};

export default RSVPForm;