// src/app/page.tsx
"use client";  

import { useState } from 'react';
import { Container } from '../../styles/page';

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <Container>
     Hello World
    </Container>
  );
}
