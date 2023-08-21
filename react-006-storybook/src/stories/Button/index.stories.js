import Button from "../../shareComps/Button";

export default {
  title: "Button",
  component: [Button],
};

export const SampleButton = () => <Button>Hello</Button>;
export const RedButton = () => <Button bgColor="red">빨간버튼</Button>;
export const GreenButton = () => (
  <Button bgColor="green" color="yellow">
    녹색버튼
  </Button>
);
