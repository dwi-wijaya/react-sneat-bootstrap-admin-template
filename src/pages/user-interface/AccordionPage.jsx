import React from 'react';
import AccordionContainer from '../../components/accordion/AccordionContainer';

export const AccordionPage = () => {

  return (
    <>
      <h4 className="py-3 mb-4">
        <span className="text-muted fw-light">UI elements /</span> Accordion
      </h4>

      <h5 className="mt-4">Accordion</h5>
      <div className="row">
        <AccordionContainer
          title="Basic Accordion"
          items={[
            {
              id: 1,
              title: 'Accordion Item 1',
              active: true,
              content: `Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing
                marzipan gummi bears macaroon dragée danish caramels powder. Bear claw dragée pastry topping
                soufflé. Wafer gummi bears marshmallow pastry pie.`,
            },
            {
              id: 2,
              title: 'Accordion Item 2',
              active: false,
              content: `Dessert ice cream donut oat cake jelly-o pie sugar plum cheesecake. Bear claw dragée oat cake
                dragée ice cream halvah tootsie roll. Danish cake oat cake pie macaroon tart donut gummies.
                Jelly beans candy canes carrot cake. Fruitcake chocolate chupa chups.`,
            },
            {
              id: 3,
              title: 'Accordion Item 3',
              active: false,
              content: `Oat cake toffee chocolate bar jujubes. Marshmallow brownie lemon drops cheesecake. Bonbon
                gingerbread marshmallow sweet jelly beans muffin. Sweet roll bear claw candy canes oat cake
                dragée caramels. Ice cream wafer danish cookie caramels muffin.`,
            },
          ]}
        />


        <AccordionContainer
          title="Accordion Without Arrow"
          items={[
            {
              id: 4,
              title: 'Accordion Item 1',
              active: false,
              content: `Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing
                marzipan gummi bears macaroon dragée danish caramels powder. Bear claw dragée pastry topping
                soufflé. Wafer gummi bears marshmallow pastry pie.`,
            },
            {
              id: 5,
              title: 'Accordion Item 2',
              active: false,
              content: `Dessert ice cream donut oat cake jelly-o pie sugar plum cheesecake. Bear claw dragée oat cake
                dragée ice cream halvah tootsie roll. Danish cake oat cake pie macaroon tart donut gummies.
                Jelly beans candy canes carrot cake. Fruitcake chocolate chupa chups.`,
            },
            {
              id: 6,
              title: 'Accordion Item 3',
              active: true,
              content: `Oat cake toffee chocolate bar jujubes. Marshmallow brownie lemon drops cheesecake. Bonbon
                gingerbread marshmallow sweet jelly beans muffin. Sweet roll bear claw candy canes oat cake
                dragée caramels. Ice cream wafer danish cookie caramels muffin.`,
            },
          ]}
        />
      </div>
    </>
  );
};

