import { useState } from "react";
import { submitRSVP, checkDuplicateEmail, checkDuplicatePhone } from "@/lib/supabase";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Duplicate checks
    if (await checkDuplicateEmail(formData.email)) {
      setError("This email has already RSVP'd.");
      setLoading(false);
      return;
    }
    if (formData.phone && await checkDuplicatePhone(formData.phone)) {
      setError("This phone number has already RSVP'd.");
      setLoading(false);
      return;
    }

    try {
      await submitRSVP({
        ...formData,
        guest_count: Number(formData.guest_count),
        is_primary_guest: true,
        created_at: new Date().toISOString(),
      });
      setSuccess("RSVP submitted successfully!");
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
    } catch (err) {
      setError("There was an error submitting your RSVP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center text-primary">RSVP Form</h2>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      {success && <div className="text-green-600 mb-2">{success}</div>}
      <Label>Name *</Label>
      <Input name="name" value={formData.name} onChange={handleChange} required />
      <Label>Email *</Label>
      <Input name="email" type="email" value={formData.email} onChange={handleChange} required />
      <Label>Phone</Label>
      <Input name="phone" value={formData.phone} onChange={handleChange} />
      <Label>Will you be attending? *</Label>
<div className="flex gap-6 my-2">
  <label className="flex items-center gap-2">
    <input
      type="radio"
      name="attending"
      value="yes"
      checked={formData.attending === "yes"}
      onChange={handleChange}
      required
    />
    Yes, I'll be there! 🎉
  </label>
  <label className="flex items-center gap-2">
    <input
      type="radio"
      name="attending"
      value="no"
      checked={formData.attending === "no"}
      onChange={handleChange}
      required
    />
    Sorry, can't make it 😢
  </label>
</div>

{formData.attending === "yes" && (
  <>
    <Label>Number of Guests (including yourself)</Label>
    <Input
      name="guest_count"
      type="number"
      min={1}
      value={formData.guest_count}
      onChange={handleChange}
    />
    <Label>Meal Preference</Label>
    <Input name="mealpreference" value={formData.mealpreference} onChange={handleChange} />
    <Label>Special Requirements</Label>
    <Textarea name="specialrequirements" value={formData.specialrequirements} onChange={handleChange} />
  </>
)}

<Label>Message for the Couple</Label>
<Textarea name="message" value={formData.message} onChange={handleChange} />
<Button type="submit" disabled={loading}>
  {loading ? "Submitting..." : "Submit RSVP"}
</Button>
    </form>
  );
};

export default RSVPForm;