import { AddressBook, Book, BracketsAngle, Hammer } from "@phosphor-icons/react";

export function getIconComponent(icon: string, theme: 'dark' | 'light') {
  let componentProps;

  if(theme === 'dark') {
    componentProps = {
      size: 30,
      color: '#FFFFFF'
    };
  } else {
    componentProps = {
      size: 30,
      color: '#A0A0A0'
    };
  }

  if(icon === 'book') {
    return (
      <Book {...componentProps} />
    )
  }

  if(icon === 'address') {
    return (
      <AddressBook {...componentProps} />
    )
  }

  if(icon === 'bracket') {
    return (
      <BracketsAngle {...componentProps} />
    )
  }

  if(icon === 'hammer') {
    return (
      <Hammer {...componentProps} />
    )
  }
}