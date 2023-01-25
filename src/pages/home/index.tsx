import { DefaultoverlayContent } from "@/components/DefaultoverlayContent";
import { ModelSection, ModelsWrapper } from "@/components/Model";
import { Container} from "./styles";

export default function Home() {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          <ModelSection
            modelName="Model One"
            overlayNode={
            <DefaultoverlayContent 
              label="Model One"
              description="Order Online for Delivery"
            />
           }
          />
        </div>
      </ModelsWrapper>
    </Container>
  )
} 