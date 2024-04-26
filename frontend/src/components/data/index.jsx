import { House, HouseSimple, Lightning, PaintBrushHousehold, Toilet, Wall } from "@phosphor-icons/react";

const size = 50

export const IndustryData = [
  
  {
    industryName: "Roofer",
    url: "roofer",
    icon: <HouseSimple size={size} />,
    subText: "Roofs done right, guaranteed tight!",
    mainText: "Building a roof is such an exciting phase but it is also extremely crucial. Your actions and decisions may have long-term repercussions if not aligned to industry standards. Whether it is a new roof or a replacement that involves different types of roof construction, there are factors that you have to bear in mind.",
    image: "https://images.pexels.com/photos/2980954/pexels-photo-2980954.jpeg"
  },
  {
    industryName: "Electrician",
    url: "electrician",
    icon: <Lightning size={size} />,
    subText: "Exquisite Electrical Solutions",
    mainText: "An electrician is a tradesperson specializing in electrical wiring of buildings, transmission lines, stationary machines, and related equipment. Electricians may be employed in the installation of new electrical components or the maintenance and repair of existing electrical infrastructure.",
    image: "https://images.pexels.com/photos/5691642/pexels-photo-5691642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    industryName: "Plumber",
    url: "plumber",
    icon: <Toilet size={size} />,
    subText: "A flush beats a full house",
    mainText: "What is a plumber? A plumber is a construction professional who works on pipes and systems that carry water and waste throughout buildings. Common duties of a plumber include: Installing pipes into new building and ensuring they work properly.",
    image: "https://images.pexels.com/photos/7244719/pexels-photo-7244719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    industryName: "Carpenter",
    url: "carpenter",
    icon: <House size={size} />,
    subText: "Elevating Spaces, Elevating Life",
    mainText: "Carpentry is one of the oldest construction trades and is in high demand. Carpenters use natural materials (wood/timber) to install wooden fixtures and fittings. As a carpenter you could be installing doors, floors and furniture in new builds, renovating or refitting existing structures, building sets for film and theatre companies and much more.",
    image: "https://images.pexels.com/photos/5768031/pexels-photo-5768031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    industryName: "Painter",
    url: "painter",
    icon: <PaintBrushHousehold size={size} />,
    subText: "Making Your Vision a Vibrant Reality",
    mainText: "Painters apply paint, stain, and coatings to walls and ceilings, buildings, large machinery and equipment, and bridges and other structures.",
    image: "https://images.pexels.com/photos/5799086/pexels-photo-5799086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    industryName: "Mason",
    url: "mason",
    icon: <Wall size={size} />,
    subText: "Secrets hidden in plain sight",
    mainText: "Masonry consists of building structures from single units that are laid and bound together with mortar. Brick, stone and concrete blocks are the most common materials used in masonry construction. Masonry is a popular construction technique around the world, due to its many advantages.",
    image: "https://images.pexels.com/photos/5512656/pexels-photo-5512656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
]