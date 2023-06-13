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
})(current, previous); // 2023-06-13 14:33:28// 2023-06-13 14:45:40// 2023-06-13 15:17:15// 2023-06-13 15:27:01// 2023-06-13 15:31:16// 2023-06-13 15:55:57// 2023-06-13 16:09:36// 2023-06-13 16:17:44// 2023-06-13 16:28:56// 2023-06-13 16:34:28// 2023-06-13 16:40:30// 2023-06-13 16:45:39// 2023-06-13 16:49:57// 2023-06-13 16:54:31// 2023-06-13 16:58:48// 2023-06-13 17:15:28// 2023-06-13 17:59:12// 2023-06-13 19:09:39// 2023-06-13 19:23:00// 2023-06-13 19:32:38// 2023-06-13 19:42:52// 2023-06-13 19:47:27// 2023-06-13 19:50:59// 2023-06-13 19:54:00// 2023-06-13 20:05:41// 2023-06-13 20:11:19// 2023-06-13 20:15:29// 2023-06-13 20:18:18// 2023-06-13 20:59:40// 2023-06-13 21:12:20// 2023-06-13 21:17:22
