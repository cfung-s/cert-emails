import {
	Body,
	Button,
	Container,
	Head,
	Hr,
	Html,
	Img,
	Preview,
	Section,
	Text,
} from "@react-email/components";
import * as React from "react";

// interface KoalaWelcomeEmailProps {
// 	userFirstname: string;
// }

const baseUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "";

export const KoalaWelcomeEmail = () => (
	<Html>
		<Head />
		<Preview>
			Felicidades {"{{ nombre_completo }}"} 
		</Preview>
		<Body style={main}>
			<Container style={container}>
				<Img
					src={`${baseUrl}/static/senacyt.png`}
					width="320"
					height="95"
					alt="Koala"
					style={logo}
				/>
				<Text style={paragraph}>Estimado {"{{ nombre_completo }}"},</Text>
				<Text style={paragraph}>
					Por este medio le informamos que su certificado ha sido generado y está listo para su descarga.
				</Text>
				<Section style={btnContainer}>
					<Button style={button} href="{{ enlace }}">
						Haz click aquí para descargar tu certificado
					</Button>
				</Section>
				<Text style={paragraph}>
					Saludos.
				</Text>
				<Text style={smallText}>
					Este correo fue generado automáticamente por el Sistema de Emisión de Certificados de SENACYT.
				</Text>
				<Hr style={hr} />
				<Text style={footer}>
					Clayton Ciudad del Saber Edif.205, Panamá.
				</Text>
			</Container>
		</Body>
	</Html>
);

// KoalaWelcomeEmail.PreviewProps = {
// 	userFirstname: "Alan",
// } as KoalaWelcomeEmailProps;

export default KoalaWelcomeEmail;

const main = {
	backgroundColor: "#ffffff",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
	margin: "0 auto",
	padding: "20px 0 48px",
};

const logo = {
	margin: "0 auto",
};

const paragraph = {
	fontSize: "16px",
	lineHeight: "26px",
};

const smallText = {
	fontSize: "12px",
	color: "#8898aa",
}

const btnContainer = {
	textAlign: "center" as const,
};

const button = {
	backgroundColor: "#5F51E8",
	borderRadius: "3px",
	color: "#fff",
	fontSize: "16px",
	textDecoration: "none",
	textAlign: "center" as const,
	display: "block",
	padding: "12px",
};

const hr = {
	borderColor: "#cccccc",
	margin: "20px 0",
};

const footer = {
	color: "#8898aa",
	fontSize: "12px",
};
