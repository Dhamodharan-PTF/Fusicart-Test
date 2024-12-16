import NewArrivalsIcon from '../../../../fuscart/assets/catagoriesicons/sign.png';
import BestSellersIcon from '../../../../fuscart/assets/catagoriesicons/badge.png';
import PersonalizeGiftsIcon from '../../../../fuscart/assets/catagoriesicons/gift.png';
import DealsIcon from '../../../../fuscart/assets/catagoriesicons/hot-deal.png';

const SpecialLinks = [
    {
      label: 'New Arrivals',
      to: '/birthday',
      icon: NewArrivalsIcon,
    },
    {
      label: 'Best Sellers',
      to: '/flowers',
      icon:BestSellersIcon,
    },
    {
      label: 'Personalize Gifts',
      to: '/relations',
      icon:PersonalizeGiftsIcon,
    },
    {
      label: 'Deals',
      to: '/Deals',
      icon:DealsIcon,
    },
]

export default SpecialLinks;