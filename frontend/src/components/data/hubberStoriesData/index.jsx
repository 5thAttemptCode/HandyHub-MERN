import { HouseSimple, Lightning, PaintBrushHousehold, Wall } from "@phosphor-icons/react";

const size = 20

const HubberStoriesData = [
    {
        id: 1,
        modalID: "roof1",
        year: 2020,
        name: "Frank L. George",
        industry: "Roofer",
        icon: <HouseSimple size={size} />,
        stats: '"30% more clients within one year!"',
        image: "https://images.pexels.com/photos/3771111/pexels-photo-3771111.jpeg",
        story: `"HandyHub has allowed me to make connections to a wide variety of markets nation wide. 
                HandyHub has been by my side as what's felt like a guaranteed source of income through my entire 
                graphic construction career."
               `
    },
    {
        id: 2,
        modalID: "electrician1",
        year: 2021,
        name: "Peter Ferguson",
        industry: "Electician",
        icon: <Lightning size={size} />,
        stats: '"Constantly increasing revenue with more happy clients."',
        image: "https://images.pexels.com/photos/442160/pexels-photo-442160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        story: '"The clients from HandyHub range from huge companies to mom-and-pop shops all over the nation."'
    },
    {
        id: 3,
        modalID: "mason1",
        year: 2018,
        name: "Eric Stein",
        industry: "Mason",
        icon: <Wall size={size} />,
        stats: '"I landed 27 family house-builds within my first month."',
        image: "https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        story: `"Fiverr has changed my life in ways i could only dream of. I’m extremely satisfied working on this platform while 
                 supporting my family and exploring the world with new opportunities"
               `
    },
    {
        id: 4,
        modalID: "painter1",
        year: 2020,
        name: "Rolanda Blanco",
        industry: "Painter",
        icon: <PaintBrushHousehold size={size} />,
        stats: '"HandyHub saved my business."',
        image: "https://images.pexels.com/photos/7218683/pexels-photo-7218683.jpeg",
        story: `"Four years ago, I was about to lose my business. Today, I'm a top rated seller. 
                Thanks to HandyHub my business makes more income than ever and I was able to hire more people."
               `
    },
    {
        id: 5,
        modalID: "painter2",
        year: 2020,
        name: "Rolanda Blanco",
        industry: "Painter",
        icon: <PaintBrushHousehold size={size} />,
        stats: '"HandyHub saved my business."',
        image: "https://images.pexels.com/photos/7218683/pexels-photo-7218683.jpeg",
        story: `"Four years ago, I was about to lose my business. Today, I'm a top rated seller. 
                Thanks to HandyHub my business makes more income than ever and I was able to hire more people."
               `
    },
    {
        id: 6,
        modalID: "painter3",
        year: 2020,
        name: "Rolanda Blanco",
        industry: "Painter",
        icon: <PaintBrushHousehold size={size} />,
        stats: '"HandyHub saved my business."',
        image: "https://images.pexels.com/photos/7218683/pexels-photo-7218683.jpeg",
        story: `"Four years ago, I was about to lose my business. Today, I'm a top rated seller. 
                Thanks to HandyHub my business makes more income than ever and I was able to hire more people."
               `
    }
]

export default HubberStoriesData