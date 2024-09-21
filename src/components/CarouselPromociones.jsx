import Cards from './Cards';
import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function CarouselPromociones() {
  const cardsData = [
    {
      item: 'Wings 8 piezas',
      subsidiary: 'Loma Real',
      photo:
        'https://img.freepik.com/foto-gratis/alitas-pollo-al-bufalo-frescas-aperitivo-salado-ai-generativa_188544-8118.jpg?ga=GA1.1.1033137900.1717898657&semt=ais_hybrid',
      price: 120,
      discount: 15,
      newprice: function () {
        return this.price - (this.price * this.discount) / 100;
      },
      description: '',
      card_category: 'Wings',
    },
    {
      item: 'Wings 12 piezas',
      subsidiary: 'Loma Real',
      photo:
        'https://img.freepik.com/foto-gratis/alitas-pollo-al-bufalo-frescas-aperitivo-salado-ai-generativa_188544-8118.jpg?ga=GA1.1.1033137900.1717898657&semt=ais_hybrid',
      price: 160,
      discount: 15,
      newprice: function () {
        return this.price - (this.price * this.discount) / 100;
      },
      description: '',
      card_category: 'Wings',
    },
    {
      item: 'Wings 24 piezas',
      subsidiary: 'Loma Real',
      photo:
        'https://img.freepik.com/foto-gratis/alitas-pollo-al-bufalo-frescas-aperitivo-salado-ai-generativa_188544-8118.jpg?ga=GA1.1.1033137900.1717898657&semt=ais_hybrid',
      price: 120,
      discount: 15,
      newprice: function () {
        return this.price - (this.price * this.discount) / 100;
      },
      description: '',
      card_category: 'Wings',
    },
    {
      item: 'Boneless 10 piezas',
      subsidiary: 'Loma Real',
      photo:
        'https://img.freepik.com/fotos-premium/primer-plano-alimentos_1048944-3147561.jpg?ga=GA1.1.1033137900.1717898657',
      price: 120,
      discount: 15,
      newprice: function () {
        return this.price - (this.price * this.discount) / 100;
      },
      description: '',
      card_category: 'Boneless',
    },

    {
      item: 'Boneless 15 piezas',
      subsidiary: 'Loma Real',
      photo:
        'https://img.freepik.com/fotos-premium/primer-plano-alimentos_1048944-3147561.jpg?ga=GA1.1.1033137900.1717898657',
      price: 120,
      discount: 15,
      newprice: function () {
        return this.price - (this.price * this.discount) / 100;
      },
      description: '',
      card_category: 'Boneless',
    },
    {
      item: 'Boneless 25 piezas',
      subsidiary: 'Loma Real',
      photo:
        'https://img.freepik.com/fotos-premium/primer-plano-alimentos_1048944-3147561.jpg?ga=GA1.1.1033137900.1717898657',
      price: 120,
      discount: 15,
      newprice: function () {
        return this.price - (this.price * this.discount) / 100;
      },
      description: '',
      card_category: 'Boneless',
    },
    {
      item: 'Boneless 30 piezas',
      subsidiary: 'Loma Real',
      photo:
        'https://img.freepik.com/fotos-premium/primer-plano-alimentos_1048944-3147561.jpg?ga=GA1.1.1033137900.1717898657',
      price: 120,
      discount: 15,
      newprice: function () {
        return this.price - (this.price * this.discount) / 100;
      },
      description: '',
      card_category: 'Boneless',
    },
    {
      item: 'Aros de Cebolla',
      subsidiary: 'Loma Real',
      photo:
        'https://img.freepik.com/foto-gratis/anillos-fritos-chile-dulce_140725-3764.jpg?ga=GA1.1.1033137900.1717898657&semt=ais_hybrid',
      price: 70,
      discount: 0,
      newprice: function () {
        return this.price - (this.price * this.discount) / 100;
      },
      description: '',
      card_category: 'Snacks',
    },
    {
      item: 'Aros de Cebolla flaming hot',
      subsidiary: 'Loma Real',
      photo:
        'https://img.freepik.com/foto-gratis/anillos-fritos-chile-dulce_140725-3764.jpg?ga=GA1.1.1033137900.1717898657&semt=ais_hybrid',
      price: 90,
      discount: 0,
      newprice: function () {
        return this.price - (this.price * this.discount) / 100;
      },
      description: '',
      card_category: 'Snacks',
    },
    {
      item: 'Cheese sticks',
      subsidiary: 'Loma Real',
      photo:
        'https://img.freepik.com/fotos-premium/mozzarella-indulgente-salsa-marinara_1267495-3670.jpg?ga=GA1.1.1033137900.1717898657&semt=ais_hybrid',
      price: 70,
      discount: 0,
      newprice: function () {
        return this.price - (this.price * this.discount) / 100;
      },
      description: '',
      card_category: 'Snacks',
    },
    {
      item: 'Cheese sticks flaming hot',
      subsidiary: 'Loma Real',
      photo:
        'https://img.freepik.com/fotos-premium/mozzarella-indulgente-salsa-marinara_1267495-3670.jpg?ga=GA1.1.1033137900.1717898657&semt=ais_hybrid',
      price: 70,
      discount: 0,
      newprice: function () {
        return this.price - (this.price * this.discount) / 100;
      },
      description: '',
      card_category: 'Snacks',
    },
    {
      item: 'Bonachones',
      subsidiary: 'Loma Real',
      photo:
        'https://img.freepik.com/foto-gratis/plato-tacos-ternera-verduras-recien-asados-ia-generativa_188544-8038.jpg?ga=GA1.1.1033137900.1717898657',
      price: 70,
      discount: 0,
      newprice: function () {
        return this.price - (this.price * this.discount) / 100;
      },
      description: '',
      card_category: 'Snacks',
    },
    {
      item: 'Papas ',
      subsidiary: 'Loma Real',
      photo:
        'https://img.freepik.com/foto-gratis/vista-superior-deliciosas-papas-fritas-salsa_23-2149235944.jpg?ga=GA1.1.1033137900.1717898657&semt=ais_hybrid',
      price: 70,
      discount: 0,
      newprice: function () {
        return this.price - (this.price * this.discount) / 100;
      },
      description: '',
      card_category: 'Snacks',
    },
    {
      item: 'Papas con queso',
      subsidiary: 'Loma Real',
      photo:
        'https://img.freepik.com/fotos-premium/patatas-fritas-arafe-queso-salsa-recipiente-papel_1035439-18749.jpg?ga=GA1.1.1033137900.1717898657&semt=ais_hybrid',
      price: 70,
      discount: 0,
      newprice: function () {
        return this.price - (this.price * this.discount) / 100;
      },
      description: '',
      card_category: 'Snacks',
    },
    {
      item: 'Verdura extra',
      subsidiary: 'Loma Real',
      photo:
        'https://img.freepik.com/foto-gratis/disposicion-verduras-cuchillos-alto-angulo_23-2148582633.jpg?ga=GA1.1.1033137900.1717898657',
      price: 70,
      discount: 0,
      newprice: function () {
        return this.price - (this.price * this.discount) / 100;
      },
      description: '',
      card_category: 'Snacks',
    },
    {
      item: 'Aderezo extra',
      subsidiary: 'Loma Real',
      photo:
        'https://img.freepik.com/fotos-premium/composicion-comida-salsas-mexicanas_1106939-98349.jpg?ga=GA1.1.1033137900.1717898657',
      price: 70,
      discount: 0,
      newprice: function () {
        return this.price - (this.price * this.discount) / 100;
      },
      description: '',
      card_category: 'Snacks',
    },
    {
      item: 'Ribs',
      subsidiary: 'Loma Real',
      photo:
        'https://img.freepik.com/fotos-premium/tabla-corte-madera-filetes-ella-ramita-verde-romero-parte-superior_975681-53856.jpg?ga=GA1.1.1033137900.1717898657&semt=ais_hybrid',
      price: 250,
      discount: 10,
      newprice: function () {
        return this.price - (this.price * this.discount) / 100;
      },
      description: '2 baby ribs acompañadas de elote y papa',
      card_category: 'Snacks',
    },
    {
      item: 'Ribs & Boneless',
      subsidiary: 'Loma Real',
      photo:
        'https://img.freepik.com/fotos-premium/plato-barbacoa-ahumado-costillas-cerdo-sacado-maiz-mazorca-papas-fritas-indulgente-comida-chatarra-grasa_996993-137544.jpg?w=1380',
      price: 250,
      discount: 10,
      newprice: function () {
        return this.price - (this.price * this.discount) / 100;
      },
      description: '2 baby ribs + 10 boneless acompañada de elote y papa',
      card_category: 'Ribs',
    },
    {
      item: 'Papas bufalo',
      subsidiary: 'Loma Real',
      photo:
        'https://img.freepik.com/fotos-premium/plato-barbacoa-ahumado-costillas-cerdo-sacado-maiz-mazorca-papas-fritas-indulgente-comida-chatarra-grasa_996993-137544.jpg?w=1380',
      price: 250,
      discount: 10,
      newprice: function () {
        return this.price - (this.price * this.discount) / 100;
      },
      description: 'papas bañadas en queso + 10 boneless, ranch y bufalo',
      card_category: 'Ribs',
    },
    {
      item: 'Burguer bufalo',
      subsidiary: 'Loma Real',
      photo:
        'https://img.freepik.com/foto-gratis/hamburguesa-vista-frontal-papas-fritas_23-2148678814.jpg?t=st=1726518054~exp=1726521654~hmac=5bdfa8129a3164c350bb0b56e1964647710885cf48d3e8a24416f179ab92cb2e&w=740',
      price: 250,
      discount: 10,
      newprice: function () {
        return this.price - (this.price * this.discount) / 100;
      },
      description:
        'Hamburguesa acompañada de Aro de cebolla, queso, pepinillos, tomates, ranch y porcion de papas',
      card_category: 'Burgues & Dogs',
    },
    {
      item: 'Chick Dog',
      subsidiary: 'Loma Real',
      photo:
        'https://img.freepik.com/foto-gratis/delicioso-hot-dog-salsa_23-2148768259.jpg?t=st=1726518386~exp=1726521986~hmac=d140c6ff2f63e5a6cf0fe2b7e038b9d02b905b07b4e4dd9a815f2e28442690ef&w=360',
      price: 250,
      discount: 10,
      newprice: function () {
        return this.price - (this.price * this.discount) / 100;
      },
      description:
        'Tradicional pan de hot dog + boneless, pico de gallo, flaming y ranch',
      card_category: 'Burgues & Dogs',
    },
    {
      item: 'Ensalada parmesana',
      subsidiary: 'Loma Real',
      photo:
        'https://img.freepik.com/foto-gratis/delicioso-hot-dog-salsa_23-2148768259.jpg?t=st=1726518386~exp=1726521986~hmac=d140c6ff2f63e5a6cf0fe2b7e038b9d02b905b07b4e4dd9a815f2e28442690ef&w=360',
      price: 250,
      discount: 10,
      newprice: function () {
        return this.price - (this.price * this.discount) / 100;
      },
      description:
        'Capa de lechuga, 10 boneless, con zanahoria, apio, tomate, pepinillos parmesano y ranch',
      card_category: 'Ensalada',
    },
    {
      item: 'Charola Mediana',
      subsidiary: 'Loma Real',
      photo:
        'https://img.freepik.com/fotos-premium/comida-japonesa-sushi-barbacoa-barbacoa-espagueti-pasta-comida-casera-ramen-yakitori-carne-parrilla_1246444-43640.jpg?ga=GA1.1.1033137900.1717898657',
      price: 250,
      discount: 10,
      newprice: function () {
        return this.price - (this.price * this.discount) / 100;
      },
      description:
        '40 Boneless, 1/2 de papas, 1/2 orden de aros de cebolla, 1/2 orden de aros de cheese sticks',
      card_category: 'Charolas',
    },
    {
      item: 'Charola Grande',
      subsidiary: 'Loma Real',
      photo:
        'https://img.freepik.com/fotos-premium/comida-japonesa-sushi-barbacoa-barbacoa-espagueti-pasta-comida-casera-ramen-yakitori-carne-parrilla_1246444-43640.jpg?ga=GA1.1.1033137900.1717898657',
      price: 250,
      discount: 10,
      newprice: function () {
        return this.price - (this.price * this.discount) / 100;
      },
      description:
        '40 Boneless, 1/2 de papas, 1/2 orden de aros de cebolla, 1/2 orden de aros de cheese sticks',
      card_category: 'Charolas',
    },
    {
      item: 'Charola Combinada',
      subsidiary: 'Loma Real',
      photo:
        'https://img.freepik.com/fotos-premium/comida-japonesa-sushi-barbacoa-barbacoa-espagueti-pasta-comida-casera-ramen-yakitori-carne-parrilla_1246444-43640.jpg?ga=GA1.1.1033137900.1717898657',
      price: 250,
      discount: 10,
      newprice: function () {
        return this.price - (this.price * this.discount) / 100;
      },
      description:
        '40 Boneless, 1/2 de papas, 1/2 orden de aros de cebolla, 1/2 orden de aros de cheese sticks',
      card_category: 'Charolas',
    },
    {
      item: 'Refrescos',
      subsidiary: 'Loma Real',
      photo: 'https://i.blogs.es/7fc463/tapones1/1366_2000.jpg',
      price: 250,
      discount: 10,
      newprice: function () {
        return this.price - (this.price * this.discount) / 100;
      },
      description: 'Bebida a eleccion',
      card_category: 'Bebidas',
    },
    {
      item: 'Cerveza',
      subsidiary: 'Loma Real',
      photo:
        'https://m.media-amazon.com/images/I/81L-WO1vN1L._AC_UF894,1000_QL80_.jpg',
      price: 250,
      discount: 10,
      newprice: function () {
        return this.price - (this.price * this.discount) / 100;
      },
      description: 'Bebida a eleccion',
      card_category: 'Bebidas',
    },
  ];

  const discountedCards = cardsData.filter((card) => card.discount > 0);

  const CardsContainer = ({ discountedCards }) => {
    const scrollContainer = useRef(null);
    const [scrollInterval, setScrollInterval] = useState(null);

    const handleMouseMove = (e) => {
      const container = scrollContainer.current;
      const { left, right } = container.getBoundingClientRect();
      const buffer = 30;

      if (e.clientX < left + buffer) {
        startScrolling(-5);
      } else if (e.clientX > right - 20) {
        startScrolling(5);
      } else {
        stopScrolling();
      }
    };

    const startScrolling = (speed) => {
      if (!scrollInterval) {
        const interval = setInterval(() => {
          scrollContainer.current.scrollLeft += speed;
        }, 20);
        setScrollInterval(interval);
      }
    };

    const stopScrolling = () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
        setScrollInterval(null);
      }
    };

    useEffect(() => {
      const container = scrollContainer.current;
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', stopScrolling);

      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', stopScrolling);
        stopScrolling();
      };
    }, [scrollInterval]);

    return (
      <div
        ref={scrollContainer}
        className="flex flex-row gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{ width: '100vw', whiteSpace: 'nowrap', overflowX: 'scroll' }}
      >
        {discountedCards.map((data) => (
          <div key={`card-${data.item}`} className="snap-start">
            <Cards
              photo={data.photo}
              item={data.item}
              discount={data.discount}
              subsidiary={data.subsidiary}
              newprice={data.newprice}
              price={data.price}
            />
          </div>
        ))}
      </div>
    );
  };
  CardsContainer.propTypes = {
    discountedCards: PropTypes.arrayOf(
      PropTypes.shape({
        item: PropTypes.string.isRequired,
        subsidiary: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        discount: PropTypes.number.isRequired,
        newprice: PropTypes.func.isRequired,
        description: PropTypes.string,
        card_category: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  return <CardsContainer discountedCards={discountedCards} />;
}
