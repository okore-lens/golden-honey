import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, inquiryType, message } = body;

        const result = await resend.emails.send({
            from: "Info <info@okorelens.com>",
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #D4A574;">New Inquiry from Golden Honey</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Type:</strong> ${inquiryType === "farmer" ? "Farmer/Producer Partnership" : "Customer Inquiry"}</p>
          <hr style="border: none; border-top: 1px solid #D4A574; margin: 20px 0;">
          <h3 style="color: #333;">Message:</h3>
          <p style="white-space: pre-wrap; color: #555;">${message}</p>
          <hr style="border: none; border-top: 1px solid #D4A574; margin: 20px 0;">
          <p style="font-size: 12px; color: #999;">This is an automated email from Golden Honey website inquiry form.</p>
        </div>
      `,
            subject: `New ${inquiryType === "farmer" ? "Farmer Partnership" : "Customer"} Inquiry from ${name}`,
            to: process.env.BUSINESS_EMAIL || "okorelens27@gmail.com",
        });

        if (result.error) {
            console.error("Resend error:", result.error);
            return Response.json(
                { error: "Failed to send inquiry" },
                { status: 500 },
            );
        }

        return Response.json({ id: result.data?.id, success: true });
    } catch (error) {
        console.error("API error:", error);
        return Response.json(
            { error: "Internal server error" },
            { status: 500 },
        );
    }
}
