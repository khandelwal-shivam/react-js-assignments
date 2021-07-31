import toJson from "enzyme-to-json";
import { shallow, mount } from "enzyme";
import Header from "../components/header";
import AllSongs from "../components/songs";
import { SongData } from "../components/songs/songdata";
import SongList from "../components/songs/songlist";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

const traverseComponent = (component, index) => {
  let result;
  let cur = 0;
  component.forEach((node) => {
    if (cur === index) {
      result = node;
    }
    cur++;
  });
  return result;
};

describe("Test Suite 1", () => {
  it("SnapShot Testing for SongList using Mount", () => {
    const wrap = mount(<AllSongs />);
    expect(wrap).toMatchSnapshot();
  });

  it("Check if correct h1  heading name is rendered", () => {
    const actualHeading = "FED React : Assigment7 : TDD, JEST and Enzyme";
    const wrapper = shallow(<Header />);
    expect(wrapper.find("h1").text()).toEqual(actualHeading);
  });

  it("SongList Component is rendered", () => {
    const wrapper = shallow(<AllSongs />);
    expect(wrapper.find("SongList").length).toEqual(1);
  });
});

describe("Test Suite 2", () => {
  it("Title is 2nd column in SongList", () => {
    const actualHeader2 = "Title";
    const wrapper = shallow(<SongList data={SongData} />);
    const innerComp = traverseComponent(
      wrapper.find("thead tr th").children(),
      1
    );
    let expectedHeader2 = innerComp.text();
    expect(expectedHeader2).toEqual(actualHeader2);
  });

  it("Singer is 4th column heading in SongList", () => {
    const actualHeader4 = "Singer";
    const wrapper = shallow(<SongList data={SongData} />);
    const innerComp = traverseComponent(
      wrapper.find("thead tr th").children(),
      3
    );
    let expectedHeader4 = innerComp.text();
    expect(expectedHeader4).toEqual(actualHeader4);
  });

  it("2nd song name passed as props match with SongList Component as 2nd songName when rendered.", () => {
    const expectedSongName2 = SongData[1].title;
    let actualSongName2;
    let i = 0;
    const wrapper = mount(<SongList data={SongData} />);
    const components = wrapper.find(".playlist tbody tr").children();
    components.forEach((node) => {
      if (i === 5) {
        actualSongName2 = node.render().text();
      }
      i++;
    });
    expect(actualSongName2).toEqual(expectedSongName2);
  });

  it("When SongList Array passed as props then Second Song's SongLength matches with Second Song Component's song Length when rendered", () => {
    const ExpectedSongData = Object.values(SongData[1]);
    let ActualSongData = [];
    const wrapper = shallow(<SongList data={SongData} />);
    const SongListWrapper = wrapper.find(".playlist tbody").children();
    const SongInfo2 = traverseComponent(SongListWrapper, 1).find("td");

    SongInfo2.forEach((node) => {
      ActualSongData.push(node.render().text());
    });
    for (let i = 0; i < 4; i++) {
      expect(ActualSongData[i]).toEqual(ExpectedSongData[i]);
    }
  });

  it("When Null Array pass as SongList's props then it must not crash and no song component is rendered", () => {
    const wrapper = shallow(<SongList data={[]} />);
    expect(wrapper.find(".playlist tbody").children().length).toEqual(0);
  });
});
