import React, { ReactNode } from "react";
import { Button as Ui5Button } from "@ui5/webcomponents-react";

interface CustomButtonProps {
   children: ReactNode;
   onClick: () => void;
   [x: string]: any;
   icon?: string;
}

const Button: React.FC<CustomButtonProps> = ({
   children,
   onClick,
   icon,
   ...props
}) => {
   return (
      <Ui5Button design={"Default"} onClick={onClick} icon={icon} {...props}>
         {children}
      </Ui5Button>
   );
};

export default Button;
