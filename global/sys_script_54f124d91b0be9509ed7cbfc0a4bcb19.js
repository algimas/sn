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
  var Base64 = Packages.org.opensaml.xml.util.Base64;
  var hardCodedSysId = "54f124d91b0be9509ed7cbfc0a4bcb19";
  //current.update();

  var queryString = "descriptionSTARTSWITHtestttttttttttttttttttttttt";

  var inc = new GlideRecord("incident");
  inc.addEncodedQuery(queryString);
  //if (inc.isValidEncodedQuery(queryString))
  inc.query();

  while (inc.next()) {
    inc.setValue("work_notes", "Some text");
    inc.update();
  }
})(current, previous); // 2023-06-13 05:55:07// 2023-06-13 06:50:33// 2023-06-13 06:53:29// 2023-06-13 07:02:59// 2023-06-13 08:20:42// 2023-06-13 08:36:08// 2023-06-13 08:45:52// 2023-06-13 08:56:54// 2023-06-13 09:01:23// 2023-06-13 09:18:42// 2023-06-13 09:33:10// 2023-06-13 09:39:35// 2023-06-13 10:20:55// 2023-06-13 10:25:20// 2023-06-13 11:08:31// 2023-06-13 11:16:37// 2023-06-13 11:50:56// 2023-06-13 11:59:10// 2023-06-13 12:03:54// 2023-06-13 12:08:50
