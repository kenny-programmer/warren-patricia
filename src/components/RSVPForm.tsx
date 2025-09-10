import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { Heart, Users, Utensils } from 'lucide-react';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: '',
    guestCount: '1',
    dietaryRestrictions: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send the data to your backend
    // For now, we'll just show a success message
    toast({
      title: "RSVP Submitted Successfully!",
      description: "Thank you for your response. We can't wait to celebrate with you!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      attendance: '',
      guestCount: '1',
      dietaryRestrictions: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="wedding-card max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-serif text-primary flex items-center justify-center gap-2">
          <Heart className="w-8 h-8" />
          RSVP
        </CardTitle>
        <p className="text-muted-foreground">
          Please let us know if you'll be joining us for our special day
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                placeholder="Your full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="+63 XXX XXX XXXX"
            />
          </div>

          <div className="space-y-4">
            <Label className="text-base font-medium">Will you be attending? *</Label>
            <RadioGroup
              value={formData.attendance}
              onValueChange={(value) => handleInputChange('attendance', value)}
              className="flex gap-8"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes" className="text-primary font-medium">
                  Yes, I'll be there! 🎉
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no" className="text-muted-foreground">
                  Sorry, can't make it 😢
                </Label>
              </div>
            </RadioGroup>
          </div>

          {formData.attendance === 'yes' && (
            <>
              <div className="space-y-2">
                <Label htmlFor="guestCount" className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Number of Guests (including yourself)
                </Label>
                <Select 
                  value={formData.guestCount}
                  onValueChange={(value) => handleInputChange('guestCount', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5].map(num => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} Guest{num > 1 ? 's' : ''}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dietary" className="flex items-center gap-2">
                  <Utensils className="w-4 h-4" />
                  Dietary Restrictions or Special Requests
                </Label>
                <Textarea
                  id="dietary"
                  value={formData.dietaryRestrictions}
                  onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
                  placeholder="Please let us know about any dietary restrictions, allergies, or special accommodations needed..."
                  rows={3}
                />
              </div>
            </>
          )}

          <div className="space-y-2">
            <Label htmlFor="message">Message for the Couple</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Share your wishes, excitement, or any message for Warren & Patricia..."
              rows={4}
            />
          </div>

          <Button
            type="submit"
            className="w-full text-lg py-6 bg-gradient-maroon hover:opacity-90 transition-opacity"
            disabled={!formData.name || !formData.email || !formData.attendance}
          >
            Submit RSVP
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RSVPForm;