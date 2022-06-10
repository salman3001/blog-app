import React, { BaseSyntheticEvent, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { togelState } from "../redux/floatbarState";
import { twd } from "./Types";

export default function FloatBar() {
  const [selected, setSelected] = useState("1");
  const togelSelected = (id: string) => { setSelected(id) };
  const floatbarState: boolean = useSelector((state) => state.floatbarState.open);
  const dispatch = useDispatch();

  return (
    <Container floatbarState={floatbarState}>
      <Content>
        <Tabs>
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
        </Tabs>
        <TabContent id="1" selected={selected}>
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
      </Content>
      <OnClickListner floatbarState={floatbarState} />
    </Container>
  );
}


//components


const OnClickListner = ({ floatbarState }: { floatbarState: boolean }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`bg-black/40 h-screen w-full ${floatbarState ? "block" : "none"
        }`}
      onClick={() => {
        dispatch(togelState());
      }}
    ></div>
  );
};

interface Icontainer {
  floatbarState: Boolean
}

const Container: twd<Icontainer> = (prop) => <div
  {...prop}
  className={`fixed h-[200px] w-full hidden shadow-lg z-[2] md:${prop.floatbarState ? "block" : "hidden"}`} />

const Content: twd = (prop) => <div
  {...prop}
  className={`flex w-full h-full `} />

const Tabs: twd = (prop) => <div
  {...prop}
  className={`w-[30%] bg-gray-400 h-ful border-r-2 border-gray-200 flex flex-col justify-center items-end pl-4`} />

interface Itab {
  selected: string
  id: string
  togelSelected: (id: string) => void
}

const Tab: twd<Itab> = (prop) => <div
  {...prop}
  onClick={(e)=>prop.togelSelected(e.currentTarget.id)}
  className={`${prop.selected === prop.id ? "bg-white px-2 w-40 text-right cursor-pointer rounded-l-md" : "bg-gray-400 px-2 w-40 text-right hover:bg-white cursor-pointer transition-all rounded-l-md"}`} />

interface ItabContent {
  id:string
  selected:string
} 

const TabContent: twd<ItabContent> = (prop) => prop.selected === prop.id ? <div
  {...prop}
  className={`w-full bg-white`} /> :<></>

