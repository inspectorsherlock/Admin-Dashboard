import React from 'react';
import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://paultriukas279252189.files.wordpress.com/2020/10/robert-deutsch-usa-today-sports.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Karolina Smith</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media.vanityfair.com/photos/6217c3b4a481d5714ef4c1cd/master/w_2560%2Cc_limit/1331107413"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Prince Charles</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://ca-times.brightspotcdn.com/dims4/default/936b53e/2147483647/strip/true/crop/2000x2706+0+0/resize/1098x1486!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fff%2F2c%2Fdedf568e4af087cab5f0a5c76f32%2Fla-ca-bk-a-promised-land-barack-obama-183.JPG"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Barack Obama</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Joe Biden</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
