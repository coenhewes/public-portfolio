import Link from "next/link";
import { Button } from "~/components/ui/button"

export default function RevOpsPage() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen pt-16">
      <div className="flex flex-col mb-8">
        <h1 className="font-bold text-3xl mb-4">Enterprise Sales & Revenue Operations</h1>
        <div>
          <p>I specialize in driving revenue growth and optimizing sales processes through a unique blend of technical expertise and strategic sales experience:</p>
        </div>
        <div>
          <ul className="list-disc text-left mt-4">
            <li><b>Sales Strategy & Execution</b> for navigating complex B2B sales cycles</li>
            <li><b>Revenue Operations</b> aligning sales, marketing, and customer success</li>
            <li><b>CRM Customization & Management</b> 
using Salesforce, Hubspot and other platforms
</li>
            <li><b>Sales Analytics & Reporting</b> leveraging Python and SQL for data-driven insights</li>
            <li><b>Sales Enablement Tools</b> development using JavaScript and React</li>
            <li><b>Process Automation</b> with Python scripting and integrations</li>
            <li><b>Pipeline Management & Forecasting</b> for predictable revenue growth</li>
            <li><b>Sales Tech Stack Optimization</b> to enhance team productivity</li>
            <li><b>Cross-Functional Collaboration</b> for seamless workflows, bridging sales, operations, and development teams</li>
            <li><b>Data Visualization & Reporting</b> for clear, actionable insights</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

