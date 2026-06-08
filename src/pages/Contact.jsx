import { SectionHeader } from '../components/SectionHeader';
import { profile } from '../data/profile';
import { Icon } from '../utils/icons';

const contactItems = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: 'Mail',
  },
  {
    label: 'GitHub',
    value: 'nexxucc',
    href: profile.github,
    icon: 'Github',
  },
  {
    label: 'LinkedIn',
    value: 'vanshjain05',
    href: profile.linkedin,
    icon: 'Linkedin',
  },
  {
    label: 'Location',
    value: profile.location,
    href: '#',
    icon: 'MapPin',
  },
];

export function Contact() {
  return (
    <section className="section page-section" id="contact">
      <div className="container">
        <SectionHeader
          label="Contact"
          title="Let's build something useful"
          description="Always open for meaningful discussions."
        />

        <div className="contact-grid stagger-children">
          {contactItems.map((item) => (
            <a className="contact-card" href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" key={item.label}>
              <div className="contact-icon">
                <Icon name={item.icon} />
              </div>

              <p className="contact-label">{item.label}</p>
              <p className="contact-value">{item.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}