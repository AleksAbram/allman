import MultilevelSidebar from "react-multilevel-sidebar";
import "react-multilevel-sidebar/src/Sidebar.css";
import "./SideBar.css"
let options = [
  {
    content: [
      {
        id: 1,
        name: "Одежда",
        icon: <i className="fa fa-chrome"></i>,
        children: [
          {
            titleIcon: <i className="fa fa-opera"></i>,
            content: [{ id: 1, name: "Костюмы", to: "/items/5" }]
          }, 
          {
            titleIcon: <i className="fa fa-opera"></i>,
            content: [{ id: 1, name: "Тренчи", to: "/items/7" }]
          },
          {
            titleIcon: <i className="fa fa-opera"></i>,
            content: [{ id: 1, name: "Сорочки и рубашки", to: "/items/6" }]
          },
          {
            titleIcon: <i className="fa fa-opera"></i>,
            content: [{ id: 1, name: "Пиджаки", to: "/items/4" }]
          },
          {
            titleIcon: <i className="fa fa-opera"></i>,
            content: [{ id: 1, name: "Брюки", to: "/items/8" }]
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
            content: [{ id: 1, name: "Дерби", to: "/my-courses" }]
          }, {
            titleIcon: <i className="fa fa-opera"></i>,
            content: [{ id: 1, name: "Оксворды", to: "/my-courses" }]
          }, {
            titleIcon: <i className="fa fa-opera"></i>,
            content: [{ id: 1, name: "Лоферы", to: "/my-courses" }]
          },{
            titleIcon: <i className="fa fa-opera"></i>,
            content: [{ id: 1, name: "Кеды", to: "/my-courses" }]
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
            content: [{ id: 1, name: "Ремни", to: "/my-courses" }]
          }, {
            titleIcon: <i className="fa fa-opera"></i>,
            content: [{ id: 1, name: "Бабочки", to: "/my-courses" }]
          }, {
            titleIcon: <i className="fa fa-opera"></i>,
            content: [{ id: 1, name: "Галстуки", to: "/my-courses" }]
          }
        ]
      }
    ]
  },
  {
    titleIcon: <i className="fa fa-graduation-cap"></i>,
    content: [{ id: 1, name: "О нас", to: "/my-courses" }]
  },
  {
    titleIcon: <i className="fa fa-graduation-cap"></i>,
    content: [{ id: 1, name: "Подарочные сертификаты", to: "/my-courses" }]
  },
];

export default function SideBar(props) {
  const handleClick = (itemOptions) => {
 
  };

  return (
    <div>
      <MultilevelSidebar
        wrapperClassName={'customSidebar'}
        open={props.isOpen}
        onToggle={props.setOpen}
        options={options}
        // header="React-MultiLevel-Sidebar"
        onItemClick={handleClick}
      />
    </div>
  );
}



