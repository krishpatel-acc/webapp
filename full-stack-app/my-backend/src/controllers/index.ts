class IndexController {
    public getExample(req: Request, res: Response): void {
        res.json({ message: "This is an example response from the IndexController." });
    }

    public postExample(req: Request, res: Response): void {
        const data = req.body;
        res.json({ message: "Data received", data });
    }
}

export default IndexController;