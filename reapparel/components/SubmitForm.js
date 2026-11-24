// components/SubmitForm.js
import { useState } from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { CATEGORIES, CONDITIONS, SIZES } from "../data/catalog";

const EMPTY = {
  title: "",
  brand: "",
  category: "",
  condition: "",
  size: "",
  colour: "",
  fibre: "",
  price: "",
  originalPrice: "",
  description: "",
  seller: "",
  email: "",
};

export default function SubmitForm() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [busy, setBusy] = useState(false);

  const set = (key) => (event) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  function validate() {
    const next = {};
    if (!form.title.trim()) next.title = "Give the item a name.";
    if (!form.brand.trim()) next.brand = "Brand is required.";
    if (!form.category) next.category = "Pick a category.";
    if (!form.condition) next.condition = "Pick a condition.";
    if (!form.size) next.size = "Pick a size.";
    if (!form.fibre.trim()) next.fibre = "Fibre content is required.";
    if (!form.description.trim() || form.description.trim().length < 30)
      next.description = "Describe the item in at least 30 characters.";
    if (!form.seller.trim()) next.seller = "Your name is required.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      next.email = "Enter a valid email address.";

    const price = Number(form.price);
    const original = Number(form.originalPrice);
    if (!price || price <= 0) next.price = "Enter a price above zero.";
    if (!original || original <= 0) next.originalPrice = "Enter the original retail price.";
    if (price && original && price >= original)
      next.price = "Resale price should be below the original retail price.";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function submit(event) {
    event.preventDefault();
    setStatus(null);
    if (!validate()) return;

    setBusy(true);
    try {
      const res = await fetch("/api/listings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not submit the listing.");
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
      maxW="720px"
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

        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
          <FormControl isInvalid={!!errors.title} isRequired>
            <FormLabel>Item name</FormLabel>
            <Input value={form.title} onChange={set("title")} placeholder="Wool overcoat" />
            <FormErrorMessage>{errors.title}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.brand} isRequired>
            <FormLabel>Brand</FormLabel>
            <Input value={form.brand} onChange={set("brand")} placeholder="Harris Tweed" />
            <FormErrorMessage>{errors.brand}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.category} isRequired>
            <FormLabel>Category</FormLabel>
            <Select value={form.category} onChange={set("category")} placeholder="Select">
              {CATEGORIES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </Select>
            <FormErrorMessage>{errors.category}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.condition} isRequired>
            <FormLabel>Condition</FormLabel>
            <Select value={form.condition} onChange={set("condition")} placeholder="Select">
              {CONDITIONS.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </Select>
            <FormErrorMessage>{errors.condition}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.size} isRequired>
            <FormLabel>Size</FormLabel>
            <Select value={form.size} onChange={set("size")} placeholder="Select">
              {SIZES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
              <option value="One size">One size</option>
            </Select>
            <FormErrorMessage>{errors.size}</FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormLabel>Colour</FormLabel>
            <Input value={form.colour} onChange={set("colour")} placeholder="Charcoal" />
          </FormControl>

          <FormControl isInvalid={!!errors.fibre} isRequired>
            <FormLabel>Fibre</FormLabel>
            <Input value={form.fibre} onChange={set("fibre")} placeholder="100% wool" />
            <FormErrorMessage>{errors.fibre}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.price} isRequired>
            <FormLabel>Your price (USD)</FormLabel>
            <NumberInput min={1}>
              <NumberInputField value={form.price} onChange={set("price")} placeholder="84" />
            </NumberInput>
            <FormErrorMessage>{errors.price}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.originalPrice} isRequired>
            <FormLabel>Original retail (USD)</FormLabel>
            <NumberInput min={1}>
              <NumberInputField
                value={form.originalPrice}
                onChange={set("originalPrice")}
                placeholder="420"
              />
            </NumberInput>
            <FormErrorMessage>{errors.originalPrice}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.seller} isRequired>
            <FormLabel>Your name</FormLabel>
            <Input value={form.seller} onChange={set("seller")} placeholder="Aparna R." />
            <FormErrorMessage>{errors.seller}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.email} isRequired>
            <FormLabel>Email</FormLabel>
            <Input value={form.email} onChange={set("email")} placeholder="you@example.com" />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>
        </Grid>

        <FormControl isInvalid={!!errors.description} isRequired>
          <FormLabel>Description</FormLabel>
          <Textarea
            value={form.description}
            onChange={set("description")}
            rows={5}
            placeholder="Fit, wear, any marks or repairs. Be specific — honest listings sell faster."
          />
          <FormHelperText>
            {form.description.trim().length} characters (minimum 30)
          </FormHelperText>
          <FormErrorMessage>{errors.description}</FormErrorMessage>
        </FormControl>

        <Button type="submit" colorScheme="brand" size="lg" isLoading={busy}>
          Submit listing
        </Button>
      </VStack>
    </Box>
  );
}