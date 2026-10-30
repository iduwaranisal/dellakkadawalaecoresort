import { NextResponse } from "next/server";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(8, "Phone number must be at least 8 digits"),
  visitDate: z.string().min(1, "Please choose an intended visit date"),
  guests: z.string().min(1, "Please enter the number of guests"),
  visitType: z.enum(["Day Out", "Stay", "Group Gathering"]),
  message: z.string().optional(),
  // Honeypot spam field: must remain empty
  company: z.string().max(0, "Spam detected").optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Check honeypot
    if (body.company && body.company.length > 0) {
      return NextResponse.json({ success: true, message: "Enquiry received." });
    }

    const validatedData = enquirySchema.parse(body);

    // Log the enquiry to the console
    console.log("=== NEW DELLAKKADAWALA ENQUIRY ===");
    console.log("Name:", validatedData.name);
    console.log("Phone:", validatedData.phone);
    console.log("Visit Date:", validatedData.visitDate);
    console.log("Guests:", validatedData.guests);
    console.log("Visit Type:", validatedData.visitType);
    console.log("Message:", validatedData.message || "(No message provided)");
    console.log("Timestamp:", new Date().toISOString());
    console.log("==================================");

    // TODO: connect email notification service (e.g. Resend, SendGrid) or WhatsApp Business webhook to alert the resort manager directly.

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your enquiry has been received. We will contact you shortly to confirm your visit.",
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the form fields.",
          errors: error.issues,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please call us directly.",
      },
      { status: 500 }
    );
  }
}

