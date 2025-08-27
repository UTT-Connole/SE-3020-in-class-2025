import {Text} from "react-native";

type GreenTextProps = {
  text: string;
  altColor?: string;
  children?: React.ReactNode;
};

const GreenText = ({ text, altColor, children }: GreenTextProps) => {
  return (
    <Text style={{ color: altColor || 'green', fontWeight: 'bold' }}>
        {text}
        {children}
    </Text>
  );
};

export default GreenText;
