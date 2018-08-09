webpackJsonp([61501822903806],{585:function(t,e){t.exports={data:{markdownRemark:{html:"<p>All reports are either Open or Closed and can be changed to a variety of different states.</p>\n<h3>Open Report States</h3>\n<p>When reports haven't been acted on or resolved, they are in an open state.\nThese are the Open report states:</p>\n<table>\n<thead>\n<tr>\n<th>State</th>\n<th>Detail</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Pre-submission</td>\n<td>This report state is only applicable when Human-Augmented Signal is enabled for the program. The report starts in the pre-submission state when it has been flagged as potentially invalid. A HackerOne security analyst will first review the report before it's sent to the program.</td>\n</tr>\n<tr>\n<td>New</td>\n<td>The report is in an unread state.</td>\n</tr>\n<tr>\n<td>Triaged</td>\n<td>The report is evaluated but hasn't been resolved. It is in the state of being fixed.</td>\n</tr>\n<tr>\n<td>Needs More Info</td>\n<td>More information is needed from the hacker about the vulnerability. Reports that are in the \n<em>Needs More Info</em>\n state for more than 30 days will automatically close and won't have a negative impact on the hacker's reputation.</td>\n</tr>\n</tbody>\n</table>\n<p>There are impacts to hacker reputation when the program changes the report state. Reputation isn't impacted when the hacker changes the report state themselves. They can self-close a report until it's marked as triaged.</p>\n<h3>Closed Report States</h3>\n<p>When a report is complete, and no further dialogue with the team, triager, or hacker is needed, it's changed into a closed state. Closed states change a hacker's reputation.  </p>\n<p>These are the Closed report states:</p>\n<table>\n<thead>\n<tr>\n<th>State</th>\n<th>Detail</th>\n<th>Change to Hacker Reputation</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Resolved</td>\n<td>The report is valid and no further dialogue with the hacker is needed.</td>\n<td>Increase +7</td>\n</tr>\n<tr>\n<td>Informative</td>\n<td>The report contains useful information but doesn't warrant an immediate action or a fix. A program can consider providing an alternative risk assessment or other mitigating factors, and public disclosure is available with mutual agreement.</td>\n<td>No change</td>\n</tr>\n<tr>\n<td>Duplicate</td>\n<td>This issue has already been reported. Programs can build trust by attributing the issue to its original discoverer and linking it to a previous report or including other details about its discovery. Public disclosure isn't available for this state. \n<br>\n<br>\n<em>Note: If a hacker files a duplicate of a public report, their reputation will go down.</em></td>\n<td>If the hacker submits the original report:\n<br>\n<em>Resolved</em>\n: +2\n<br>\n<br>\n<br>\n<em>Not Applicable</em>\n: -5\n<br>\n<br>\n<em>Informative</em>\n: 0</td>\n</tr>\n<tr>\n<td>Not Applicable</td>\n<td>The report doesn't contain a valid issue and has no security implications. Security teams should describe why the report was invalid, so the hacker can improve their hacking skills.</td>\n<td>Decrease -5</td>\n</tr>\n<tr>\n<td>Spam</td>\n<td>The report is invalid because the hacker didn't describe a legitimate security vulnerability. You should notify HackerOne so additional restrictions can be applied to the hacker.</td>\n<td>Decrease -10</td>\n</tr>\n</tbody>\n</table>",frontmatter:{title:"Report States",id:"hackers/report-states",path:"/hackers/report-states.html",description:null}}},pathContext:{}}}});
//# sourceMappingURL=path---hackers-report-states-html-82ce182efa451367c1b2.js.map