import React from 'react';
import style from './TermsConditions.module.css';

const TermsConditions = () => {
  return (
    <section className={style['terms-conditions']}>
      <div className={style.container}>
        <div className={style['terms-content']}>
          <h1>Terms & Conditions</h1>
          
          <p>These Terms and Conditions ("Terms") govern your use of the Lucy's Cleaning LLC website and services. By accessing our website or using our services, you agree to be bound by these Terms.</p>

          <h2>1. Definitions</h2>
          <p>For the purpose of these terms and conditions, the following words shall have the following meanings:</p>
          <ul>
            <li>The 'Company' refers to Lucy's Cleaning LLC.</li>
            <li>The 'Customer' refers to the person or organization for whom the Company agrees to carry out cleaning services.</li>
            <li>The 'Cleaner' refers to the employee or representative of the Company performing the cleaning work for the Customer.</li>
          </ul>

          <h2>2. General Conditions</h2>
          <ul>
            <li>The Company reserves the right to refuse or decline work at its discretion. Any agreed cleaning work will be undertaken by a cleaner of the Company's choice.</li>
            <li>The Customer must advise the Company of any fragile items, valuable possessions, or special requirements before cleaning begins. The Company is not liable for damage to items not disclosed or consequential loss if not informed.</li>
            <li>The Customer is responsible for moving or securing personal belongings, valuables, or obstructions that may impede the cleaners. If assistance is required, this must be agreed in advance and may incur additional charges.</li>
            <li>Furniture and items may be moved if necessary for thorough cleaning. While care will be taken, the Company is not responsible for items being replaced exactly as originally positioned.</li>
            <li>The Company provides cleaning services only and does not provide repair, maintenance, or construction services.</li>
          </ul>

          <h2>3. Charges and Payments</h2>
          <ul>
            <li>Charges will include the cost of cleaning supplies and time spent by the cleaner, including travel time and obtaining supplies.</li>
            <li>Estimates are valid for 30 days and may be revised due to additional work instructed by the Customer, increases in material costs, or discovery of unforeseen issues.</li>
            <li>Invoices are due upon completion of work unless otherwise agreed in writing.</li>
            <li>Projects exceeding $500 may require a deposit, payable before work commencing.</li>
            <li>Interest on overdue invoices will be charged at 1.5% per month on unpaid balances.</li>
          </ul>

          <h2>4. Scheduling and Access</h2>
          <ul>
            <li>The Company will make reasonable efforts to ensure the cleaner attends at the agreed time but accepts no liability for delays or non-attendance due to circumstances beyond our control.</li>
            <li>If access to the property is not available at the agreed time, a service call fee may apply.</li>
            <li>Cleaning services will be carried out during standard hours (8:00 am to 6:00 pm, Monday to Saturday) unless alternative arrangements are made in writing.</li>
            <li>Parking fees incurred by the cleaner will be passed to the Customer when applicable.</li>
          </ul>

          <h2>5. Warranties and Guarantees</h2>
          <ul>
            <li>The Company offers a 90-day guarantee on workmanship from the date of completion. Any claims must be submitted in writing with reasonable detail.</li>
            <li>The guarantee does not cover damage caused by misuse, negligence, or customer-supplied cleaning products that may cause damage.</li>
            <li>This guarantee is provided in addition to statutory rights under applicable consumer protection legislation.</li>
          </ul>

          <h2>6. Liability</h2>
          <ul>
            <li>The Company is only liable for works it completes and does not accept responsibility for consequential damages or defects from uncompleted or unrelated work.</li>
            <li>The Company's liability is limited to the cost of the work performed.</li>
            <li>The Company is not liable for delays caused by factors beyond its reasonable control, including but not limited to acts of God, supplier delays, or Customer inaccessibility.</li>
          </ul>

          <h2>7. Cancellation and Changes</h2>
          <ul>
            <li>The Customer may cancel or reschedule appointments with at least 24 hours' notice.</li>
            <li>Cancellations with less than 24 hours' notice may incur a service call fee.</li>
            <li>Changes to the scope of work must be agreed upon in writing and may affect pricing and scheduling.</li>
          </ul>

          <h2>8. Property and Materials</h2>
          <ul>
            <li>The Company brings all necessary cleaning supplies and equipment. Customer-supplied cleaning products may be used if requested, but are not covered under the Company's warranty.</li>
          </ul>

          <h2>9. Safety and Compliance</h2>
          <ul>
            <li>All cleaning work will be performed in accordance with safety regulations and best practices.</li>
            <li>The Customer must inform the Company of any known hazardous materials, pests, or unsafe conditions on the premises.</li>
            <li>The Company reserves the right to stop cleaning if unsafe conditions are discovered.</li>
          </ul>

          <h2>10. Dispute Resolution</h2>
          <ul>
            <li>In the event of a dispute, the Company will seek to resolve the issue amicably with the Customer.</li>
            <li>If a resolution cannot be reached, both parties agree to attempt mediation before pursuing legal action.</li>
            <li>These terms shall be governed by applicable laws.</li>
          </ul>

          <h2>11. Privacy and Photography</h2>
          <ul>
            <li>Photographs of completed work may be used for marketing purposes. Identifiable features will be blurred unless explicit written consent is provided.</li>
            <li>Customer information will be kept confidential and not shared with third parties except as required by law.</li>
          </ul>

          <h2>12. Modifications</h2>
          <p>These terms and conditions may be updated from time to time. Continued use of our services constitutes acceptance of any changes. The most current version will always be available on our website.</p>

          <h2>Contact Information</h2>
          <div className={style['contact-info']}>
            <p><strong>Lucy's Cleaning LLC</strong></p>
            <p>WhatsApp: +1 (551) 301-2908</p>
          </div>

          <p className={style['last-updated']}>Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;