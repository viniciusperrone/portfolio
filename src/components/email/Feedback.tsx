import * as React from 'react';
import {
  Body,
  Container,
  Column,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,  
} from '@react-email/components';

import { images, description } from '@/mock/email';

interface FeedbackEmailProps {
  name: string;
  language?: 'pt' | 'en';
}

export function FeedbackEmail({ name, language = 'pt' }: FeedbackEmailProps) {
  return (
    <Html lang={language === 'pt' ? 'pt-BR' : 'en'}>
      <Head />
      {
        language === 'pt' ? (
          <Preview>
            Olá, {name} 🤙
          </Preview>
        ) : (
          <Preview>
            Hi, {name} 🤙
          </Preview>
        )
      }
      <Body style={main}>
        <Container style={container}>
          <Section style={logo}>
            <Img 
              src={images.logo} 
              height={40}
            />
          </Section>
          <Section style={content}>
            <Text style={paragraph}>
              {
                language === 'pt' ? 'Olá ' : 'Hi '
              }
              {name},
            </Text>
            
            <Text style={paragraph}>
              {description.first[language]}
            </Text>
            <Text style={paragraph}>
              {description.second[language]}
            </Text>
            <Text style={paragraph}>
              {description.third[language]}
            </Text>
            <Row
              align="center"
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 35,
                paddingRight: 35
              }}
            >
              <Column align="center">
                <Img 
                  src={images.react} 
                  width={38} 
                />
              </Column>
              <Column align="center">
                <Img 
                  src={images.django} 
                  width={38}
                />
              </Column>
              <Column align="center">
                <Img 
                  src={images.mongo} 
                  width={38}
                />
              </Column>
              <Column align="center">
                <Img 
                  src={images.next} 
                  width={38}
                />
              </Column>
              <Column align="center">
                <Img 
                  src={images.node} 
                  width={38}
                />
              </Column>
            </Row>
            <Text style={paragraph}>
            {description.fourth[language]}
              <br />
              Vinicius Perrone
            </Text>
          </Section>
        </Container>

        <Section style={footer}>
          <Text style={{ textAlign: 'center', color: '#706a7b' }}>
            © 2024 Vinicius Perrone, {language === 'en' ? 'All Rights Reserved' : 'Todos os direitos reservados'}
          </Text>
        </Section>
      </Body>
    </Html>
  );
}

const fontFamily = 'HelveticaNeue,Helvetica,Arial,sans-serif';

const main = {
  backgroundColor: '#efeef1',
  fontFamily,
  paddingTop: 30
};

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
};

const container = {
  width: '580px',
  margin: '30px auto',
  backgroundColor: '#ffffff',
};

const footer = {
  width: '580px',
  margin: '0 auto',
};

const content = {
  padding: '5px 50px 10px 60px',
};

const logo = {
  width: '100%',
  backgroundColor: '#151526',
  display: 'flex',
  justifyContent: 'center',
  alingItems: 'center',
  paddingTop: 15,
  paddingBottom: 15,
  paddingLeft: 30,
};

