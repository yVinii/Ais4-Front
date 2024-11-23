import React, { useState } from "react";
import "./MainStyles/faq_style.css";

const Faq = () => {
    // Estado para controlar quais dropdowns estão abertos
    const [activeIndex, setActiveIndex] = useState(null);

    // Dados de exemplo para perguntas e respostas
    const faqData = [
        { question: "Qual é o prazo de entrega?", answer: "O prazo varia entre 7 a 14 dias úteis, dependendo do projeto." },
        { question: "Como faço para acompanhar meu pedido?", answer: "Você pode acompanhar pelo nosso painel online, usando seu login." },
        { question: "Quais formas de pagamento são aceitas?", answer: "Aceitamos cartões de crédito, boleto bancário e Pix." },
        { question: "É possível cancelar um pedido?", answer: "Sim, o cancelamento pode ser feito até 24 horas após o pagamento." },
        { question: "Posso personalizar meu pedido?", answer: "Sim, personalizações podem ser discutidas diretamente com nossa equipe." },
        { question: "Como entro em contato com o suporte?", answer: "Você pode entrar em contato pelo e-mail suporte@empresa.com ou pelo WhatsApp." },
        { question: "Como entro em contato com o suporte?", answer: "Você pode entrar em contato pelo e-mail suporte@empresa.com ou pelo WhatsApp." },
    ];

    // Função para alternar o dropdown
    const toggleDropdown = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq">
            <div className="container-faq-tittle">
                <h1>- Perguntas Frequentes -</h1>
            </div>

            <div className="container-faq-drops">
                {faqData.map((item, index) => (
                    <div className="dropdown" key={index}>
                        <div
                            className="dropdown-question"
                            onClick={() => toggleDropdown(index)}
                        >
                            {item.question}
                        </div>
                        {activeIndex === index && (
                            <div
                            className={`dropdown-answer ${
                                activeIndex === index ? "active" : ""
                            }`}
                        >
                            {item.answer}
                        </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq;
