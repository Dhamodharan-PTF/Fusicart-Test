import NewArrivalsIcon from '../../Assets/catagoriesicons/sign.png';
import BestSellersIcon from '../../Assets/catagoriesicons/badge.png';
import PersonalizeGiftsIcon from '../../Assets/catagoriesicons/gift.png';
import DealsIcon from '../../Assets/catagoriesicons/hot-deal.png';

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