import React from "react";
import {Card, CardActions, CardHeader, CardTitle, CardText}
  from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import {List, ListItem} from 'material-ui/List';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import Person from 'material-ui/svg-icons/social/person';
import Grade from 'material-ui/svg-icons/action/grade';
import Phone from 'material-ui/svg-icons/hardware/phone-android';
import _ from "underscore";

const style = {
  container: {
    margin: "0.5rem"
  },
  header: {
    background: "#eee",
    display: "flex",
    alignItems: "center",
    paddingRight: "3.4rem"
  },
  headerRight: {
    position: "absolute",
    right: "2.7rem"
  }
};

const AsyncSample = () =>
  <Card style={style.container}>
    <CardHeader
      title="ソフトラボ合同会社ソフトラボ合同会社ソフトラボ合同会社ソフトラボ合同会社"
      actAsExpander={false}
      showExpandableButton={true}
      style={style.header}
    >
      <div style={style.headerRight}>
        <IconButton
          tooltip="変更"
          onClick={e => {
            e.preventDefault();
            alert("CLICK EDIT");
          }}
        >
          <FontIcon className="material-icons" color={blue500}>
            edit
          </FontIcon>
        </IconButton>
        <IconButton tooltip="削除">
          <FontIcon className="material-icons" color={red500}>
            delete
          </FontIcon>
        </IconButton>
      </div>
    </CardHeader>
    <CardText>
      <ListItem primaryText="安里武人" leftIcon={<Person />}/>
      <ListItem primaryText="Aランク/Aランク" leftIcon={<Grade />}/>
      <ListItem primaryText="000-0000-0000" leftIcon={<Phone />}/>
    </CardText>
    <CardText expandable={true}>
      2016.01.08 制御系のメンバーとLampのメンバーがいる。 全員リーダー格。
      <br />
      派遣会社からのスピンアウトらしい。営業いない上に給与高すぎで採用の予算がない。
      <br />
      商流はあり、それぞれエース級が入っているのだが・・・
      <br />
      大日本印刷はLamp。ただし、派遣契約で手が出ない。
      <br />
      アジレント(北八王子)安里さん常駐。C#で電子計測器 若干研究開発的な要素ありつつ、
      自分で考えて解決策を提示したり、客のニーズ読んで動いたり必要。
      <br />
      東京精密(北八王子)社員常駐。半導体製造装置 WinOS C言語 でかいプログラム
    </CardText>
  </Card>;

export default AsyncSample;
