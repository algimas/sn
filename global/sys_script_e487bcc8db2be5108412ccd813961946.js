(function executeRule(current, previous) {
  var queryString = "descriptionSTARTSWITHaaaaaaaaag";
  var inc = new GlideRecord("incident");
  inc.addEncodedQuery(queryString);
  inc.query();
  while (inc.next()) {
    inc.setValue("work_notes", "Some text");
    if (inc.update()) {
      //
    }
  }
})(current, previous); // 2023-06-15 19:43:54// 2023-06-15 19:48:12
