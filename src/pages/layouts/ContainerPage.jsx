import LayoutExample from "../../components/layouts-example/LayoutWrapper";

export const ContainerPage = () => {
  return (
    <LayoutExample
      img="/assets/img/layouts/layout-container-light.png"
      alt="Layout container"
      title="Layout without Menu (Navigation)"
      explanation="Container layout sets a <code>max-width</code> at each responsive breakpoint."
    ></LayoutExample>
  );
};
