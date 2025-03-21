import { humanize } from "@/lib/utils/textConverter";
import * as Icon from "react-feather";
import { markdownify } from "@/lib/utils/textConverter";

const HomapageFeature = ({ feature_list }) => {
  return (
    <div className="key-feature-grid mt-10 grid grid-cols-1 gap-7 md:grid-cols-3">
      {feature_list.map((item, i) => {
        const FeatherIcon = Icon[humanize(item.icon)];
        return (
          <div
            key={i}
            className="flex flex-col justify-between rounded-lg bg-surface p-4 shadow-md hover:shadow-lg  transition-all"
          >
            <div className="p-2">
              <div className="flex flex-row items-center">
                <span className="icon">
                <FeatherIcon />
                </span>
                <h3 className="ml-2 break-all text-sm md:text-lg">{item.title}</h3>
              </div>
              <p dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomapageFeature;
