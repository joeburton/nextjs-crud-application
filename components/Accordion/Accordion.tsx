import React, { useState } from 'react';

import styles from './Accordion.module.css';

interface AccordionItemInterface {
  title: string;
  description: string;
}

interface AccordionItemsInterface {
  items: AccordionItemInterface[];
}

const AccordionItem = ({ title, description }: AccordionItemInterface) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <li data-testid='accordion-item'>
      <span className={styles.title} onClick={toggleIsOpen}>
        {title}
      </span>
      <span
        data-testid='accordion-description'
        className={`${styles.description} ${isOpen ? '' : styles.collapsed}`}
      >
        {description}
      </span>
    </li>
  );
};

const Accordion = ({ items }: AccordionItemsInterface) => {
  return (
    <ul className={styles.accordion} data-testid='accordion'>
      {items.length &&
        items.map((item, i) => <AccordionItem key={i} {...item} />)}
    </ul>
  );
};

export default Accordion;
