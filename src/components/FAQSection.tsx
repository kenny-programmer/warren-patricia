import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What time should I arrive?",
      answer: "Kindly arrive 30 minutes before the ceremony to settle in."
    },
    {
      question: "What should I wear?",
      answer: "Formal, semi-formal, or Filipiniana. Colors: Champagne or Nude tones preferred. Accent colors: White, Silver, and Gold."
    },
    {
      question: "Can I bring a plus one?",
      answer: "Kindly check your invitation. If your invite is addressed to you alone, we'd love to keep it intimate."
    },
    {
      question: "Are kids welcome?",
      answer: "While we adore children, our guest list is limited. Only the children in our first family and wedding entourage are included. We kindly request no additional children to ensure a solemn atmosphere during the Holy Mass. We appreciate your understanding."
    },
    {
      question: "Where is the ceremony/reception venue?",
      answer: "Ceremony: Invencion Dela Sta. Cruz Parish Church, Alitagtag, Batangas at 3:00 PM. Reception: Villa Salome Resort, Pinagkurusan, Alitagtag, Batangas following the ceremony."
    },
    {
      question: "Is parking available?",
      answer: "Yes! Both our ceremony and reception venues have parking available for guests. Attendants will be on-site to guide you to the designated areas."
    },
    {
      question: "Will transportation be provided?",
      answer: "No transportation service will be provided. Guests are kindly asked to arrange their own travel to both the ceremony and reception venues."
    },
    {
      question: "Is there a gift registry?",
      answer: "Your presence is the greatest gift to us. However, if you wish to honor us with a gift, monetary gifts would be greatly appreciated to help us start our new journey together."
    },
    {
      question: "What's the weather like?",
      answer: "Both our ceremony and reception will be held indoors, so you'll be comfortable rain or shine. However, as the weather can be unpredictable, we recommend bringing a shawl or umbrella just in case of rainfall when arriving or leaving the venues."
    },
    {
      question: "Who can I contact if I have questions?",
      answer: "Feel free to reach out to the Groom and Bride directly on Facebook: Warren (facebook.com/WarrenRMalijan) or Tricia (facebook.com/adan.triciamae)"
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">Everything you need to know about our special day</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="wedding-card mb-4">
                <AccordionTrigger className="text-left px-6 py-4 text-lg font-medium text-primary hover:text-wedding-maroon">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;