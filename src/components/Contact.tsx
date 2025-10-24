import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacy: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      toast.error("Veuillez accepter la politique de confidentialité");
      return;
    }
    
    // Here you would typically send the form data to your backend
    toast.success("Message envoyé ! Nous vous répondrons rapidement.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      privacy: false
    });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-foreground mb-4">Contact</h2>
          <p className="text-muted-foreground mb-8">
            Remplissez le formulaire ou prenez rendez-vous pour une première séance gratuite.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Nom & Prénom"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            
            <Input
              type="tel"
              placeholder="Téléphone"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            
            <Textarea
              placeholder="Votre message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              rows={6}
            />
            
            <div className="flex items-center gap-2">
              <Checkbox
                id="privacy"
                checked={formData.privacy}
                onCheckedChange={(checked) => setFormData({...formData, privacy: checked as boolean})}
                required
              />
              <label htmlFor="privacy" className="text-sm text-muted-foreground cursor-pointer">
                J'accepte la politique de confidentialité
              </label>
            </div>
            
            <Button type="submit" size="lg" className="w-full">
              Envoyer
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
