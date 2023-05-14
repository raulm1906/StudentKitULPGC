import React from "react";
import { Box, Center, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import imagen from "./Group 22.svg";
import { useTranslation } from "react-i18next";
import '../../components/forms.css';
import '../../components/style.css';
import Footer from '../../components/Footer.js';
import Header from '../cabecera.js';

function FaqForm() {
  const [t, i18n] = useTranslation('common');

  const questions = [
    {
      question: t('Preguntas.pregunta1'),
      answer: (
        <>
            <p className="answer-text">
               {t('Respuestas.respuesta1_1')}<br/>
               {t('Respuestas.respuesta1_2')}<br/>
               {t('Respuestas.respuesta1_3')}<br/>
               {t('Respuestas.respuesta1_4')}<br/>
               {t('Respuestas.respuesta1_5')}<br/>
               {t('Respuestas.respuesta1_6')}<br/>
               {t('Respuestas.respuesta1_7')}<br/>
               {t('Respuestas.respuesta1_8')}
            </p>
        </>
      )
    },
    {
        question: t('Preguntas.pregunta2'),
        answer: (
          <>
            <p className="answer-text">
                {t('Respuestas.respuesta2_1')}<br/>
                {t('Respuestas.respuesta2_2')}<br/>
                {t('Respuestas.respuesta2_3')}<br/>
                {t('Respuestas.respuesta2_4')}<br/>
                {t('Respuestas.respuesta2_5')}<br/>
                {t('Respuestas.respuesta2_6')}
            </p>
          </>
        )
    },
    {
        question: t('Preguntas.pregunta3'),
        answer: <p className="answer-text">{t('Respuestas.respuesta3')}</p>
    },
    {
        question: t('Preguntas.pregunta4'),
        answer: <p className="answer-text">{t('Respuestas.respuesta4')}</p>
    },
    {
        question: t('Preguntas.pregunta5'),
        answer: <p className="answer-text">{t('Respuestas.respuesta5')}</p>
    },
    {
        question: t('Preguntas.pregunta6'),
        answer: <p className="answer-text">{t('Respuestas.respuesta6')}</p>
    },
    {
        question: t('Preguntas.pregunta7'),
        answer: <p className="answer-text">{t('Respuestas.respuesta7')}</p>
    },
    {
        question: t('Preguntas.pregunta8'),
        answer: <p className="answer-text">{t('Respuestas.respuesta8')}</p>
    },
    {
        question: t('Preguntas.pregunta9'),
        answer: (
          <>
            <p className="answer-text">
                {t('Respuestas.respuesta9_1')}<br/>
                {t('Respuestas.respuesta9_2')}<br/>
                {t('Respuestas.respuesta9_3')}<br/>
                {t('Respuestas.respuesta9_4')}<br/>
                {t('Respuestas.respuesta9_5')}<br/>
                {t('Respuestas.respuesta9_6')}
            </p>
          </>
        )
    },
    {
        question: t('Preguntas.pregunta10'),
        answer: <p className="answer-text">{t('Respuestas.respuesta10')}</p>
    },
    {
        question: t('Preguntas.pregunta11'),
        answer: (
          <>
            <p className="answer-text">
                {t('Respuestas.respuesta11_1')}<br/>
                {t('Respuestas.respuesta11_2')}<br/>
                {t('Respuestas.respuesta11_3')}<br/>
                {t('Respuestas.respuesta11_4')}
            </p>
          </>
        )
    },
    {
        question: t('Preguntas.pregunta12'),
        answer: (
          <>
            <p className="answer-text">
                {t('Respuestas.respuesta11_1')}<br/>
                {t('Respuestas.respuesta11_2')}<br/>
                {t('Respuestas.respuesta11_3')}<br/>
                {t('Respuestas.respuesta11_4')}<br/>
                {t('Respuestas.respuesta12_5')}
            </p>
          </>
        )
    },
    {
        question: t('Preguntas.pregunta13'),
        answer: (
            <>
              <p className="answer-text">
                  {t('Respuestas.respuesta13_informacion')}<br/>
                  <p className="answer-list">
                    {t('Respuestas.respuesta13_1')}<br/>
                    {t('Respuestas.respuesta13_2')}<br/>
                    {t('Respuestas.respuesta13_3')}<br/>
                    {t('Respuestas.respuesta13_4')}<br/>
                    <p className="answer-register">
                        {t('Respuestas.respuesta13_4_usuario')}<br/>
                        {t('Respuestas.respuesta13_4_correo')}<br/>
                        {t('Respuestas.respuesta13_4_contraseña')}<br/>
                        {t('Respuestas.respuesta13_4_confirmarContraseña')}<br/>
                    </p>
                    {t('Respuestas.respuesta13_5')}<br/>
                    {t('Respuestas.respuesta13_6')}
                   </p>
              </p>
            </>
          )
    },
    {
        question: t('Preguntas.pregunta14'),
        answer: <p className="answer-text">{t('Respuestas.respuesta14')}</p>
    },
    {
        question: t('Preguntas.pregunta15'),
        answer: <p className="answer-text">{t('Respuestas.respuesta15')}</p>
    },

  ];

  return (
    <div className="faqForm">
      <Header />
      <h1 className="question-title">{t('Preguntas.titulo')}</h1>
      <div className="content-wrapper">
        <Accordion allowMultiple>
            {questions.map((q, index) => (
            <AccordionItem key={index}>
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                        <strong>{t(q.question)}</strong>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel>
                <h4>{q.answer}</h4>
                </AccordionPanel>
            </AccordionItem>
            ))}
        </Accordion>
      </div>
      <Footer />
    </div>
  );
}

export default FaqForm;