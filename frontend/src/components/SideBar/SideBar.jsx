import MultilevelSidebar from "react-multilevel-sidebar";
import "react-multilevel-sidebar/src/Sidebar.css";
import "./SideBar.css"
const options = [
  {
    content: [
      {
        id: 1,
        name: "Одежда ",
        icon: <i className="fa fa-chrome"></i>,
        children: [
          {
            titleIcon: <i className="fa fa-opera"></i>,
            content: [{ id: 1, name: "Костюмы", to: "/items/types/5" }]
          }, 
          {
            titleIcon: <i className="fa fa-opera"></i>,
            content: [{ id: 1, name: "Тренчи", to: "/items/types/7" }]
          },
          {
            titleIcon: <i className="fa fa-opera"></i>,
            content: [{ id: 1, name: "Сорочки и рубашки", to: "/items/types/6" }]
          },
          {
            titleIcon: <i className="fa fa-opera"></i>,
            content: [{ id: 1, name: "Пиджаки", to: "/items/types/4" }]
          },
          {
            titleIcon: <i className="fa fa-opera"></i>,
            content: [{ id: 1, name: "Брюки", to: "/items/types/8" }]
          }
        ]
      }
    ]
  }, 
  {
    content: [
      {
        id: 2,
        name: "Обувь",
        icon: <i className="fa fa-chrome"></i>,
        children: [
          {
            titleIcon: <i className="fa fa-opera"></i>,
            content: [{ id: 1, name: "Дерби", to: "/items/types/9" }]
          }, {
            titleIcon: <i className="fa fa-opera"></i>,
            content: [{ id: 1, name: "Оксфорды", to: "/items/types/10" }]
          }, {
            titleIcon: <i className="fa fa-opera"></i>,
            content: [{ id: 1, name: "Монки", to: "/items/types/11" }]
          },{
            titleIcon: <i className="fa fa-opera"></i>,
            content: [{ id: 1, name: "Кеды", to: "/items/types/12" }]
          },
        ]
      }
    ]
  }, 
  {
    content: [
      {
        id: 3,
        name: "Аксессуары",
        icon: <i className="fa fa-chrome"></i>,
        children: [
          {
            titleIcon: <i className="fa fa-opera"></i>,
            content: [{ id: 1, name: "Ремни", to: "/items/types/13" }]
          }, {
            titleIcon: <i className="fa fa-opera"></i>,
            content: [{ id: 1, name: "Бабочки", to: "/items/types/15" }]
          }, {
            titleIcon: <i className="fa fa-opera"></i>,
            content: [{ id: 1, name: "Галстуки", to: "/items/types/14" }]
          }
        ]
      }
    ]
  },
  {
    titleIcon: <i className="fa fa-graduation-cap"></i>,
    content: [{ id: 1, name: "О нас", to: "/about" }]
  },
  {
    titleIcon: <i className="fa fa-graduation-cap"></i>,
    content: [{ id: 1, name: "Подарочные сертификаты", to: "/certificates" }]
  },
];

export default function SideBar(props) {
  const handleClick = (itemOptions) => {
  };

  return (
    <div>
      <img src="/img/login.png" alt="x"/>
      <MultilevelSidebar
        wrapperClassName={'customSidebar'}
        open={props.isOpen}
        onToggle={props.setOpen}
        options={options}
        onItemClick={handleClick}
      />
    </div>
  );
}











