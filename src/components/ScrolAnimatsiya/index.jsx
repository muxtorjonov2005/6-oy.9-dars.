import React, { useRef, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

function Card({ children, cardRef }) {
  return (
    <div ref={cardRef} className="opacity-0 transform translate-y-8 transition-all duration-500">
      <div className="bg-white p-6 rounded-lg shadow-lg">{children}</div>
    </div>
  );
}

function Scrol() {
  const cards = Array.from({ length: 10 }, (_, index) => ({
    id: uuidv4(),
    content: `Card Content ${index + 1}`
  }));

  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, cards.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.remove("translate-y-8");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [cards]);

  return (
    <div className="flex flex-col items-center space-y-4 mt-10">
      {cards.map((card, index) => (
        <Card key={card.id} cardRef={(el) => (cardRefs.current[index] = el)}>
          {card.content}
        </Card>
      ))}
    </div>
  );
}

export default Scrol;
