import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { restaurant, email, phone, message } = body;

    // Validação básica
    if (!restaurant || !email || !message) {
      return NextResponse.json(
        { error: "Campos obrigatórios faltando" },
        { status: 400 }
      );
    }

    // Enviar email via Resend
    await resend.emails.send({
      from: "ementai.support@gmail.com",
      to: "ementai.app@gmail.com",
      subject: `Novo Contato: ${restaurant}`,
      html: `
        <h2>Novo contato recebido do site</h2>
        <p><strong>Restaurante:</strong> ${restaurant}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone || "Não informado"}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><small>Recebido em: ${new Date().toLocaleString("pt-BR", {
          timeZone: "America/Sao_Paulo",
        })}</small></p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Mensagem enviada com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao processar contato:", error);
    return NextResponse.json(
      { error: "Erro ao processar sua mensagem" },
      { status: 500 }
    );
  }
}
