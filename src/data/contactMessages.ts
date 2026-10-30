export type ContactIconName = 'message' | 'wave';

export type ContactMessage = {
  text: string;
  icon: ContactIconName;
};

export const contactMessages: ContactMessage[] = [
  { text: 'Shoot me a message', icon: 'message' },
  { text: 'Love to hear from you!', icon: 'wave' },
];
