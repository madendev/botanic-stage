/* {Redes sociales y contacto del sitio} */
import { ComponentType } from 'react';
import FacebookIcon from '@/components/icons/FacebookIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import TikTokIcon from '@/components/icons/TikTokIcon';
import TwitchIcon from '@/components/icons/TwitchIcon';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import SpotifyIcon from '@/components/icons/SpotifyIcon';
import MapsIcon from '@/components/icons/MapsIcon';

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: ComponentType<Record<string, unknown>>;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://facebook.com/botanicalgeciras',
    icon: FacebookIcon,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://instagram.com/botanicalgeciras',
    icon: InstagramIcon,
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    href: 'https://tiktok.com/@botanicalgeciras',
    icon: TikTokIcon,
  },
  {
    id: 'twitch',
    label: 'Twitch',
    href: 'https://twitch.tv/botanicalgeciras',
    icon: TwitchIcon,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/34603713000?text=Hola%20vengo%20desde%20el%20sitio%20web%20oficial%20y%20necesito%20informacion%20sobre...',
    icon: WhatsAppIcon,
  },
  {
    id: 'spotify',
    label: 'Spotify',
    href: 'https://open.spotify.com/user/31fzbhrvzw6s6msk3lvov5hgz3qq?si=wfgGjW1IS1-liTNOog7Iug',
    icon: SpotifyIcon,
  },
  {
    id: 'maps',
    label: 'Google Maps',
    href: 'https://maps.app.goo.gl/2AHoaEBXyBWB1fFM9',
    icon: MapsIcon,
  },
];
