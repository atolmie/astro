import React from 'react';
import Sign from './Sign';

const elements = {
  fire: 'Fire.jpg',
  water: 'Water.jpg',
  earth: 'Earth.jpg',
  air: 'Air.jpg'
}

const signs = [
  {
    name: 'Aries',
    img: elements.fire,
    element: 'Fire',
     ruler: 'Mars',
     body: 'Head, Brain, Eyes',
     stone: 'Dimond'
  },
  {
    name: 'Taurus',
    img: elements.earth,
    element: 'Earth',
    ruler: 'Venus',
    body: 'Throat, Neck, Vocal Cords',
    stone: 'Emerald'
  },
  {
    name: 'Gemini',
    img: elements.air,
    element: 'Air',
    ruler: 'Mercury',
    body: 'Arms, Lungs, Hands, Nervous System',
    stone: 'Pearl'
  },
  {
    name: 'Cancer',
    img: elements.water,
    element: 'Water',
    ruler: 'Moon',
    body: 'Chest, Breast, Stomach',
    stone: 'Ruby'
  },
  {
    name: 'Leo',
    img: elements.fire,
    element: 'Fire',
    ruler: 'Sun',
    body: 'Heart, Spine, Spinal Column, Upper Back',
    stone: 'Peridot'
  },
  {
    name: 'Virgo',
    img: elements.earth,
    element: 'Earth',
    ruler: 'Mercury',
    body: 'Digestive System, Intestines, Spleen',
    stone: 'Sapphire'
  },
  {
    name: 'Libra',
    img: elements.air,
    element: 'Air',
    ruler: 'Venus',
    body: 'Kidneys, Skin, Lower Back, Buttocks',
    stone: 'Opal'
  },
  {
    name: 'Scorpio',
    img: elements.water,
    element: 'Water',
    ruler: 'Mars',
    body: 'Reproductive Organs, Sexual Organs',
    stone: 'Topaz'
  },
  {
    name: 'Sagittarius',
    img: elements.fire,
    element: 'Fire',
    ruler: 'Jupiter',
    body: 'Hips, Thighs, Liver',
    stone: 'Turquoise'
  },
  {
    name: 'Capricorn',
    img: elements.earth,
    element: 'Earth',
    ruler: 'Saturn',
    body: 'Joints, Skeletal System',
    stone: 'Garnet'
  },
  {
    name: 'Aquarius',
    img: elements.air,
    element: 'Air',
    ruler: 'Uranus',
    body: 'Ankles, Circulatory System',
    stone: 'Amethyst'
  },
  {
    name: 'Pisces',
    img: elements.water,
    element: 'Water',
    ruler: 'Jupiter',
    body: 'Feet, Lymphatic System',
    stone: 'Aquamarine'
  },
];

class Signs extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div>
        

        <div className="sign-list">
          {signs.map(sign => (
            <Sign key={sign.name} sign={sign} />
          ))}
        </div>
      </div>
    );
  }
}

export default Signs;