// components/FAQ.js
import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Text } from '@chakra-ui/react'

export default function FAQ() {
  const faqs = [
    {
      question: "How do I submit my apparel?",
      answer: "You can submit your apparel through the 'Submit' page by filling out the form."
    },
    {
      question: "What types of apparel can I submit?",
      answer: "You can submit any clothing item that is unused or worn-out."
    },
    {
      question: "What happens to my submitted apparel?",
      answer: "Your submitted apparel can be donated, recycled, or disposed of responsibly."
    }
  ]

  return (
    <Box maxW="600px" mx="auto" py={10} px={6}>
      <Accordion allowMultiple>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} border="1px" borderColor="brand.200" borderRadius="lg" mb={4}>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontWeight="bold" color="brand.800">{faq.question}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} color="brand.600">{faq.answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  )
}
