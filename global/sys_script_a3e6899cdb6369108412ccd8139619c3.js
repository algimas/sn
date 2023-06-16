(function executeRule(current, previous) {
  var queryString = "descriptionSTARTSWITHaaaaaaaaag";
  var inc = new GlideRecord("incident");
  inc.addEncodedQuery(queryString);
  //var validQueryCheck = inc.isValidEncodedQuery(queryString);
  inc.query();
  while (inc.next()) {
    inc.setValue("work_notes", "Some text");
    if (inc.update()) {
      //
    }
    if (inc.getRowCount() > 0) {
      //
    }
    var varInsideLoop = inc.getValue("sys_id");
  }
  current.update();
  var gr = [];
  gs.info("test");
})(current, previous);
