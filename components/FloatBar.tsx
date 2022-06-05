import React, { BaseSyntheticEvent, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { togelState } from "../redux/floatbarState";
import { floatbarState } from './../../blog-app-tailwind/redux/floatbarState';

export default function FloatBar() {
  const [selected, setSelected] = useState("1");
  const togelSelected = (id:string) => {setSelected(id)};
  const floatbarState:boolean = useSelector((state) => state.floatbarState.open);
  const dispatch = useDispatch();

  return (
    <div
      className={`fixed h-[200px] w-full hidden shadow-lg z-[2] md:${
        floatbarState ? "block" : "hidden"
      }`}
    >
      <div className="flex w-full h-full ">
        <div className=" w-[30%] bg-gray-400 h-ful border-r-2 border-gray-200 flex flex-col justify-center items-end pl-4">
          <Tab
            id="1"
            selected={selected}
            togelSelected={togelSelected}
          >
            Science
          </Tab>
          <Tab id="2" selected={selected} togelSelected={togelSelected}>
            Technology
          </Tab>
          <Tab id="3" selected={selected} togelSelected={togelSelected}>
            Social Media
          </Tab>
          <Tab id="4" selected={selected} togelSelected={togelSelected}>
            Car News
          </Tab>
          <Tab id="5" selected={selected} togelSelected={togelSelected}>
            Worldwide
          </Tab>
        </div>
        <TabContent  id="1" selected={selected}>
          hello1
        </TabContent>
        <TabContent id="2" selected={selected}>
          hello2
        </TabContent>
        <TabContent id="3" selected={selected}>
          hello3
        </TabContent>
        <TabContent id="4" selected={selected}>
          hello4
        </TabContent>
        <TabContent id="5" selected={selected}>
          hello4
        </TabContent>
      </div>
      <OnClickListner floatbarState={floatbarState} />
    </div>
  );
}



//components

const Tab = ({ selected, id, togelSelected, children }:{ selected:string, id:string, togelSelected:(id:string)=>void, children:string }) => {
  return (
    <div
      id={id}
      className={`${
        selected === id
          ? "bg-white px-2 w-40 text-right cursor-pointer rounded-l-md"
          : "bg-gray-400 px-2 w-40 text-right hover:bg-white cursor-pointer transition-all rounded-l-md"
      }`}
      onClick={(e) => {
        togelSelected(e.currentTarget.id);
      }}
    >
      {children}
    </div>
  );
};

const TabContent = ({ id, selected, children }:{id:string, selected:string, children:string}
  ) => {
  return selected === id?<div className="w-full bg-white">{children}</div>:null;
};

const OnClickListner = ({ floatbarState }:{floatbarState:boolean}) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`bg-black/40 h-screen w-full ${
        floatbarState ? "block" : "none"
      }`}
      onClick={() => {
        dispatch(togelState());
      }}
    ></div>
  );
};
