import React, {
  useRef,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";

export function OutsideClickHandler({ children, handleClose }) {
  const wrapperRef = useRef(null);

  function handleClickOutside(event) {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target) &&
      handleClose
    )
      handleClose();
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return <div ref={wrapperRef}>{children}</div>;
}

const DropdownItem = ({
  children = "",
  className = "",
  closeList = null,
  ...rest
}) => (
  <div className={`dropdown-item ${className}`} {...rest}>
    {children}
  </div>
);

const DropdownMenu = ({ children = "", className = "", ...rest }) => (
  <div className={` dropdown-list ${className}`} {...rest}>
    {children}
  </div>
);

const DropdownContainer = forwardRef(
  (
    {
      toggle = "",
      className = "",
      closeOnClick,
      children = "",
      menuClassName = "",
      stopScrolling = false,
      disabled = false,
    },
    ref
  ) => {
    const [isShow, setIsShow] = useState(false);
    const dropdownRef = useRef(null);
    useImperativeHandle(ref, () => ({
      handleDropDown(value) {
        setIsShow(value);
      },
    }));

    const handleDropDownPosition = () => {
      if (disabled) return false;
      setIsShow(!isShow);
    };
    return (
      <>
        <OutsideClickHandler handleClose={() => setIsShow(false)}>
          <div className="">
            <div
              className={`cursor-pointer ${className}`}
              onClick={() => handleDropDownPosition()}
              ref={dropdownRef}
            >
              {toggle}
            </div>
            {isShow && (
              <div>
                {stopScrolling && (
                  <div
                    className="dropdown-bg stop-scrolling"
                    onClick={() => setIsShow(false)}
                  ></div>
                )}
                <div
                  className={`${menuClassName}`}
                  onClick={() => closeOnClick && setIsShow(false)}
                >
                  {" "}
                  {children}{" "}
                </div>
              </div>
            )}
          </div>
        </OutsideClickHandler>
      </>
    );
  }
);

export const Dropdown = {
  Container: DropdownContainer,
  Item: DropdownItem,
  Menu: DropdownMenu,
};

export default { Dropdown };
