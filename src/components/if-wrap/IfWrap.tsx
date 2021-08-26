import React, { Children, FC } from "react";

interface IfWrapProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  when: any,
}

// 用来包装需要判断展示dom的，类似于 v-if
const IfWrap: FC<IfWrapProps> = ({ when, children }) => (
  <>
    {
      when && Children.map(children, (item) => item)
    }
  </>
);

IfWrap.defaultProps = {
  when: false,
};

export default IfWrap;
