// When transit to closed, it means the group has already populated with resolution data
// so just use the resolution data to populate the closed notes and date
(function executeRule(current, previous /*null when async*/) {
  /*
        var date = current.resolution_date ? current.resolution_date : new GlideDateTime();
        var userId = gs.getUserID();

        // if directly close the group without resolving it
        // need to populate resolution data
        if (!current.resolution_date)
            current.resolution_date = date;
        if (!current.resolved_by)
            current.resolved_by = userId;

        var currentTime = new GlideDateTime(date);
        var remediationTarget = new GlideDateTime(current.ttr_target_date);

        // Update Remediation Target status
        if ((current.ttr_status != 'no_target') && (current.ttr_status != 'past_due')) {
            // Update Remediation Target status to "Target Missed" if the
            // CVIT is closed after the Remediation Target is crossed.
            if (currentTime.compareTo(remediationTarget) > 0)
                current.ttr_status = 'past_due';
            else
                current.ttr_status = 'target_met';
        }

        // Update Close info
        current.closed_at = date;
        //current.closed_by = userId;
        if (!current.close_notes)
            current.close_notes = current.resolution_reason;
        else if (!current.resolution_reason)
            current.resolution_reason = current.close_notes;
        current.work_notes = gs.getMessage("Closed by {0}", gs.getUserDisplayName());
        if (current.resolution_reason)
            current.work_notes = gs.getMessage("Additional information: {0}", current.resolution_reason);
    */

  gs.log(">>>test>>>print>>>from:Test-Sample-BR2-by-algis");
  var gr = new GlideRecord("change_request");
  gr.get("2342421");

  var Base64 = Packages.org.opensaml.xml.util.Base64;
  var hardCodedSysId = "54f124d91b0be9509ed7cbfc0a4bcb19";
  current.update();

  var queryString = "descriptionSTARTSWITHtestttttttttttttttttttttttt";

  var inc = new GlideRecord("incident");
  inc.addEncodedQuery(queryString);
  //if (inc.isValidEncodedQuery(queryString))
  inc.query();

  while (inc.next()) {
    inc.setValue("work_notes", "Some text");
    inc.update();
  }
})(current, previous); // 2023-06-15 06:55:10// 2023-06-15 07:01:02// 2023-06-15 07:10:16// 2023-06-15 07:20:29// 2023-06-15 07:24:15// 2023-06-15 07:26:16// 2023-06-15 07:36:33// 2023-06-15 07:47:39// 2023-06-15 07:57:02// 2023-06-15 08:00:57// 2023-06-15 08:06:22// 2023-06-15 08:17:27// 2023-06-15 08:28:59// 2023-06-15 08:44:10// 2023-06-15 11:41:05// 2023-06-15 11:49:17
