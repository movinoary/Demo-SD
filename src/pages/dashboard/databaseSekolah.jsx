import React from "react";
import * as Components from "../../components/index";
import * as cssModule from "../../styles/index";

const DatabaseSekolah = () => {
  return (
    <section className={cssModule.Dashboard.databaseSekolah}>
      <Components.WidgetInformation />
      <Components.WidgetDataAnggaran />
      <Components.WidgetDataInfo />
      <Components.WidgetMataPelajaran />
      <Components.WidgetTahunAjaran />
      <Components.WidgetKelas />
    </section>
  );
};

export default DatabaseSekolah;
