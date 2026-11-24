// components/FeedbackForm.js
import { useState } from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";

const EMPTY = { name: "", email: "", message: "" };

export default function FeedbackForm() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [busy, setBusy] = useState(false);

  const set = (key) => (event) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  async function submit(event) {
    event.preventDefault();
    setStatus(null);

    const next = {};
    if (!form.name.trim()) next.name = "Your name is required.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) next.email = "Enter a valid email.";
    if (form.message.trim().length < 10) next.message = "Tell us a little more (10+ characters).";
    setErrors(next);
    if (Object.keys(next).length) return;

    setBusy(true);
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not send feedback.");
      setStatus({ kind: "success", message: data.message });
      setForm(EMPTY);
    } catch (err) {
      setStatus({ kind: "error", message: err.message });
    } finally {
      setBusy(false);
    }
  }

  return (
    <Box
      as="form"
      onSubmit={submit}
      maxW="600px"
      mx="auto"
      bg="surface"
      borderWidth="1px"
      borderColor="border"
      borderRadius="xl"
      p={{ base: 6, md: 8 }}
    >
      <VStack spacing={5} align="stretch">
        {status && (
          <Alert status={status.kind} borderRadius="md">
            <AlertIcon />
            <AlertDescription>{status.message}</AlertDescription>
          </Alert>
        )}

        <FormControl isInvalid={!!errors.name} isRequired>
          <FormLabel>Your name</FormLabel>
          <Input value={form.name} onChange={set("name")} placeholder="Your name" />
          <FormErrorMessage>{errors.name}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.email} isRequired>
          <FormLabel>Email</FormLabel>
          <Input value={form.email} onChange={set("email")} placeholder="you@example.com" />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.message} isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea
            value={form.message}
            onChange={set("message")}
            rows={5}
            placeholder="What worked, what did not, what you would like to see."
          />
          <FormErrorMessage>{errors.message}</FormErrorMessage>
        </FormControl>

        <Button type="submit" colorScheme="brand" isLoading={busy}>
          Send feedback
        </Button>
      </VStack>
    </Box>
  );
}